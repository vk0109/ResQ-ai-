const crypto = require("crypto");
const Session = require("../models/Session");

const authMiddleware = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({
        message: "Authentication required.",
      });
    }

    const sessionToken = authHeader.split(" ")[1];

    if (!sessionToken) {
      return res.status(401).json({
        message: "Authentication required.",
      });
    }

    const tokenHash = crypto
      .createHash("sha256")
      .update(sessionToken)
      .digest("hex");

    const session = await Session.findOne({
      tokenHash,
      expiresAt: {
        $gt: new Date(),
      },
    }).populate("userId");

    if (!session || !session.userId) {
      return res.status(401).json({
        message: "Session is invalid or expired.",
      });
    }

    req.user = session.userId;
    req.session = session;

    next();
  } catch (error) {
    console.error("Auth middleware error:", error);

    return res.status(500).json({
      message: "Authentication failed.",
    });
  }
};

module.exports = authMiddleware;