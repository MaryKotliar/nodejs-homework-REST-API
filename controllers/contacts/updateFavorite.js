const { Contact } = require("../../models/contact");
const { HttpError } = require("../../helpers");
const updateFavorite = async (req, res) => {
  const { id } = req.params;
  if (!req.body) {
    throw HttpError(400, { message: "missing field favorite" });
  }
  const result = await Contact.findByIdAndUpdate(id, req.body, { new: true });
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json(result);
};
module.exports = updateFavorite;
