const express = require("express");

const ctrl = require("../../controllers/auth-controllers")

const {validateBody} = require("../../utils");

const {schemas} = require("../../models/index");

const router = express.Router();

const authenticate = require("../../middlewares/authenticate");


router.post("/register", validateBody(schemas.registerSchema), ctrl.register);

router.post("/login", validateBody(schemas.loginSchema), ctrl.login);

router.get("/current", authenticate, ctrl.getCurrent);

router.post("/logout", authenticate, ctrl.logout);

router.patch(
  "/",
  authenticate,
  validateBody(schemas.updateSubSchema),
  ctrl.updateSubUser
);

module.exports = router;
