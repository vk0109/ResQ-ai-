const express = require("express");

const {
  register,
  verifyEmail,
  login,
  logout,
  resendVerificationEmail,
} = require("../controllers/authController");

const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/register", register);

router.get("/verify-email", verifyEmail);

router.post("/login", login);

router.post("/logout", logout);

router.post("/resend-verification", resendVerificationEmail);
router.get("/me", authMiddleware, (req, res) => {
  res.status(200).json({
    message: "Authenticated successfully.",
    user: {
      id: req.user._id,
      name: req.user.name,
      email: req.user.email,
      isEmailVerified: req.user.isEmailVerified,
    },
  });
});

module.exports = router;