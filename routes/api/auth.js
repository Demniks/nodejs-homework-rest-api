const express = require("express");
const ctrl = require("../../controllers/auth")
const { validateBody, isValidId, authenticate, upload } = require("../../middlewares");
const { schemasUser } = require("../../models/user");
// const { schemas } = require("../../models/contact");

const router = express.Router();


router.post("/register", validateBody(schemasUser.registerSchema), ctrl.register)

router.get("/verify/:verificationToken", ctrl.verifyEmail);

router.post("/verify", validateBody(schemasUser.emailSchema), ctrl.resendVerifyEmail);

router.post("/login", validateBody(schemasUser.loginSchema), ctrl.login)

router.get("/current", authenticate, ctrl.getCurrent)

router.post("/logout", authenticate, ctrl.logout)

router.patch(
  "/:id/subscription",
  authenticate,
  isValidId,
  validateBody(schemasUser.updateSubscriptionSchema),
  ctrl.updateSubscriptionUser
);

router.patch(
  "/avatars",
  authenticate,
  upload.single("avatar"),
  ctrl.updateAvatar
);


module.exports = router;
