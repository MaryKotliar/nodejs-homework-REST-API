const { User } = require("../../models/user");
const path = require("path");
const Jimp = require("jimp");
const fs = require("fs/promises");
const avatarsDir = path.join(__dirname, "../../", "public", "avatars");
const updateAvatar = async (req, res) => {
  const { _id } = req.user;
  const { path: tempUpload, originalname } = req.file;
  console.log(tempUpload);

  const filename = `${_id}_${originalname}`;
  const resultUpload = path.join(avatarsDir, filename);
  await fs.rename(tempUpload, resultUpload);
  const file = await Jimp.read(resultUpload);
  const changedFile = await file.resize(250, 250);
  await changedFile.write(resultUpload);
  const avatarURL = path.join("avatars", filename);
  await User.findByIdAndUpdate(_id, { avatarURL });

  res.json({
    avatarURL,
  });
};
module.exports = updateAvatar;
