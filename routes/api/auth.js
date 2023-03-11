const express = require("express");
const router = express.Router();
const { validateBody, authenticate } = require("../../middlewares");
const { ctrlWrapper } = require("../../helpers");
const { schemas } = require("../../models/user");
const { auth: ctrl } = require("../../controllers");
router.post(
  "/register",
  validateBody(schemas.addSchema),
  ctrlWrapper(ctrl.register)
);
router.post("/login", validateBody(schemas.addSchema), ctrlWrapper(ctrl.login));
router.post("/current", authenticate, ctrlWrapper(ctrl.getCurrent));
router.patch(
  "/",
  authenticate,
  validateBody(schemas.updateSubscriptionSchema),
  ctrlWrapper(ctrl.update)
);
module.exports = router;
