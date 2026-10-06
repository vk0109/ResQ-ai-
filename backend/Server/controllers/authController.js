const crypto = require("crypto");
const bcrypt = require("bcryptjs");

const User = require("../models/User");
const Session = require("../models/Session");
const transporter = require("../config/mailer");

// ===============================
// REGISTER
// ===============================
const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        message: "Name, email and password are required.",
      });
    }

    if (password.length < 8) {
      return res.status(400).json({
        message: "Password must be at least 8 characters.",
      });
    }

    const normalizedEmail = email.trim().toLowerCase();

    const existingUser = await User.findOne({
      email: normalizedEmail,
    });

    if (existingUser) {
      return res.status(409).json({
        message: "An account with this email already exists.",
      });
    }

    // Hash password
    const passwordHash = await bcrypt.hash(password, 12);

    // Generate email verification token
    const verificationToken = crypto.randomBytes(32).toString("hex");

    const emailVerificationTokenHash = crypto
      .createHash("sha256")
      .update(verificationToken)
      .digest("hex");

    const emailVerificationExpiresAt = new Date(
      Date.now() + 15 * 60 * 1000
    );

    // Create user
    const user = await User.create({
      name: name.trim(),
      email: normalizedEmail,
      passwordHash,
      isEmailVerified: false,
      emailVerificationTokenHash,
      emailVerificationExpiresAt,
    });

    const verificationUrl =
      `http://localhost:5000/api/auth/verify-email?token=${verificationToken}`;

    // Send verification email
    try {
      await transporter.sendMail({
        from: `"SafeGuard AI" <${process.env.EMAIL_USER}>`,
        to: user.email,
        subject: "Verify your SafeGuard AI account",

        html: `
          <div
            style="
              font-family: Arial, sans-serif;
              max-width: 600px;
              margin: 0 auto;
              padding: 30px;
              color: #0f172a;
            "
          >
            <h2>Welcome to SafeGuard AI</h2>

            <p>Hi ${user.name},</p>

            <p>
              Your SafeGuard AI account has been created successfully.
              Please verify your email address to continue.
            </p>

            <div style="margin: 30px 0;">
              <a
                href="${verificationUrl}"
                style="
                  display: inline-block;
                  padding: 12px 22px;
                  background: #0284c7;
                  color: white;
                  text-decoration: none;
                  border-radius: 8px;
                  font-weight: bold;
                "
              >
                Verify Email
              </a>
            </div>

            <p style="color: #64748b;">
              This verification link will expire in 15 minutes.
            </p>

            <p style="color: #64748b;">
              If you did not create this account, you can safely ignore
              this email.
            </p>
          </div>
        `,
      });
    } catch (emailError) {
      console.error("Verification email error:", emailError);

      // Remove user if email could not be sent
      await User.findByIdAndDelete(user._id);

      return res.status(500).json({
        message:
          "Account could not be created because the verification email could not be sent.",
      });
    }

    return res.status(201).json({
      message:
        "Account created successfully. Please check your email and verify your account.",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        isEmailVerified: user.isEmailVerified,
      },
    });
  } catch (error) {
    console.error("Register error:", error);

    return res.status(500).json({
      message: "Unable to create account.",
    });
  }
};

// ===============================
// VERIFY EMAIL
// ===============================
const verifyEmail = async (req, res) => {
  try {
    const { token } = req.query;

    if (!token) {
      return res.redirect(
        "http://localhost:5173/verified?status=failed&reason=missing"
      );
    }

    const tokenHash = crypto
      .createHash("sha256")
      .update(token)
      .digest("hex");

    const user = await User.findOne({
      emailVerificationTokenHash: tokenHash,
      emailVerificationExpiresAt: {
        $gt: new Date(),
      },
    });

    if (!user) {
      return res.redirect(
        "http://localhost:5173/verified?status=failed&reason=expired"
      );
    }

    user.isEmailVerified = true;
    user.emailVerificationTokenHash = null;
    user.emailVerificationExpiresAt = null;

    await user.save();

    return res.redirect(
      `http://localhost:5173/verified?status=success&email=${encodeURIComponent(
        user.email
      )}`
    );
  } catch (error) {
    console.error("Email verification error:", error);

    return res.redirect(
      "http://localhost:5173/verified?status=failed&reason=server"
    );
  }
};

// ===============================
// LOGIN
// ===============================
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: "Email and password are required.",
      });
    }

    const normalizedEmail = email.trim().toLowerCase();

    // DEBUG — safe to log
    console.log("========== LOGIN DEBUG ==========");
    console.log("LOGIN EMAIL:", normalizedEmail);

    // Find user
    const user = await User.findOne({
      email: normalizedEmail,
    });

    console.log("USER FOUND:", !!user);

    if (!user) {
      console.log("RESULT: USER NOT FOUND");
      console.log("================================");

      return res.status(401).json({
        message: "Invalid email or password.",
      });
    }

    console.log("EMAIL VERIFIED:", user.isEmailVerified);

    // Check verification
    if (!user.isEmailVerified) {
      console.log("RESULT: EMAIL NOT VERIFIED");
      console.log("================================");

      return res.status(403).json({
        message: "Please verify your email before logging in.",
      });
    }

    // Compare password
    const isPasswordCorrect = await bcrypt.compare(
      password,
      user.passwordHash
    );

    console.log("PASSWORD MATCH:", isPasswordCorrect);

    if (!isPasswordCorrect) {
      console.log("RESULT: PASSWORD INCORRECT");
      console.log("================================");

      return res.status(401).json({
        message: "Invalid email or password.",
      });
    }

    // Generate session token
    const sessionToken = crypto.randomBytes(32).toString("hex");

    // Store only hashed token
    const tokenHash = crypto
      .createHash("sha256")
      .update(sessionToken)
      .digest("hex");

    // 30-day session
    const expiresAt = new Date(
      Date.now() + 30 * 24 * 60 * 60 * 1000
    );

    // Create session
    await Session.create({
      userId: user._id,
      tokenHash,
      expiresAt,
      userAgent: req.get("user-agent") || "",
    });

    // Update last login
    user.lastLoginAt = new Date();
    await user.save();

    console.log("SESSION CREATED: true");
    console.log("RESULT: LOGIN SUCCESS");
    console.log("================================");

    return res.status(200).json({
      message: "Login successful.",

      sessionToken,

      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        isEmailVerified: user.isEmailVerified,
      },
    });
  } catch (error) {
    console.error("Login error:", error);

    return res.status(500).json({
      message: "Unable to login.",
    });
  }
};

// ===============================
// LOGOUT
// ===============================
const logout = async (req, res) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(400).json({
        message: "No active session found.",
      });
    }

    const sessionToken = authHeader.split(" ")[1];

    if (!sessionToken) {
      return res.status(400).json({
        message: "No active session found.",
      });
    }

    const tokenHash = crypto
      .createHash("sha256")
      .update(sessionToken)
      .digest("hex");

    await Session.findOneAndDelete({
      tokenHash,
    });

    return res.status(200).json({
      message: "Logged out successfully.",
    });
  } catch (error) {
    console.error("Logout error:", error);

    return res.status(500).json({
      message: "Unable to logout.",
    });
  }
};
// ===============================
// RESEND VERIFICATION EMAIL
// ===============================
const resendVerificationEmail = async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({
        message: "Email is required.",
      });
    }

    const normalizedEmail = email.trim().toLowerCase();

    const user = await User.findOne({
      email: normalizedEmail,
    });

    if (!user) {
      return res.status(404).json({
        message: "No account found with this email.",
      });
    }

    if (user.isEmailVerified) {
      return res.status(400).json({
        message: "This email is already verified.",
      });
    }

    // Generate new verification token
    const verificationToken = crypto.randomBytes(32).toString("hex");

    const emailVerificationTokenHash = crypto
      .createHash("sha256")
      .update(verificationToken)
      .digest("hex");

    // New token valid for 15 minutes
    const emailVerificationExpiresAt = new Date(
      Date.now() + 15 * 60 * 1000
    );

    user.emailVerificationTokenHash = emailVerificationTokenHash;
    user.emailVerificationExpiresAt = emailVerificationExpiresAt;

    await user.save();

    const verificationUrl =
      `http://localhost:5000/api/auth/verify-email?token=${verificationToken}`;

    await transporter.sendMail({
      from: `"SafeGuard AI" <${process.env.EMAIL_USER}>`,
      to: user.email,
      subject: "Verify your SafeGuard AI account",

      html: `
        <div
          style="
            font-family: Arial, sans-serif;
            max-width: 600px;
            margin: 0 auto;
            padding: 30px;
            color: #0f172a;
          "
        >
          <h2>Verify your SafeGuard AI account</h2>

          <p>Hi ${user.name},</p>

          <p>
            Here is your new email verification link.
          </p>

          <div style="margin: 30px 0;">
            <a
              href="${verificationUrl}"
              style="
                display: inline-block;
                padding: 12px 22px;
                background: #0284c7;
                color: white;
                text-decoration: none;
                border-radius: 8px;
                font-weight: bold;
              "
            >
              Verify Email
            </a>
          </div>

          <p style="color: #64748b;">
            This verification link will expire in 15 minutes.
          </p>
        </div>
      `,
    });

    return res.status(200).json({
      message: "A new verification email has been sent.",
    });
  } catch (error) {
    console.error("Resend verification error:", error);

    return res.status(500).json({
      message: "Unable to resend verification email.",
    });
  }
};

// ===============================
// EXPORT
// ===============================
module.exports = {
  register,
  verifyEmail,
  login,
  logout,
  resendVerificationEmail,
};