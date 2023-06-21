const express = require("express");
const ctrl = require("../../controllers/auth")
const { validateBody, isValidId, authenticate } = require("../../middlewares");
const { schemasUser } = require("../../models/user");
// const { schemas } = require("../../models/contact");

const router = express.Router();


router.post("/register", validateBody(schemasUser.registerSchema), ctrl.register)

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


module.exports = router;