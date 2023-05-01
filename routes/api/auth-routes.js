const express = require("express");

const ctrl = require("../../controllers/auth-controller")
const {validateBody} = require("../../utils");
const {schemas} = require("../../models/user");
const { authenticate, upload } = require("../../middlewares");

const router = express.Router();




router.post("/register", validateBody(schemas.registerSchema), ctrl.register);

router.get("/verify/:verificationToken", ctrl.verify);

router.post(
  "/resend-verify-email",
  validateBody(schemas.emailSchema),
  ctrl.resendVerifyEmail
);
router.post("/login", validateBody(schemas.loginSchema), ctrl.login);

router.get("/current", authenticate, ctrl.getCurrent);

router.post("/logout", authenticate, ctrl.logout);

router.patch("/", authenticate, validateBody(schemas.updateSubSchema), ctrl.updateSubUser);

router.patch("/avatars", authenticate, upload.single("avatar"), ctrl.updateAvatar);

module.exports = router;
