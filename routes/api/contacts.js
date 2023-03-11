const express = require("express");
const { contacts: ctrl } = require("../../controllers/");
const { validateBody, isValidId, authenticate } = require("../../middlewares");
const { schemas } = require("../../models/contact");
const { ctrlWrapper } = require("../../helpers");

const router = express.Router();
router.get("/", authenticate, ctrlWrapper(ctrl.listContacts));

router.get("/:id", authenticate, isValidId, ctrlWrapper(ctrl.getContactById));

router.post(
  "/",
  authenticate,
  validateBody(schemas.addSchema),

  ctrlWrapper(ctrl.addContact)
);

router.delete("/:id", authenticate, isValidId, ctrlWrapper(ctrl.removeContact));

router.put(
  "/:id",
  authenticate,
  isValidId,
  validateBody(schemas.addSchema),
  ctrlWrapper(ctrl.updateContact)
);
router.patch(
  "/:id/favorite",
  authenticate,
  isValidId,
  validateBody(schemas.updateFavoriteSchema),
  ctrlWrapper(ctrl.updateFavorite)
);
module.exports = router;
