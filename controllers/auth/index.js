const register = require("./register");
const login = require("./login");
const getCurrent = require("./getCurrent");
const update = require("./update");
const logout = require("./logout");
const updateAvatar = require("./updateAvatar");
const verifyEmail = require("./verifyEmail");
const resendVerifyEmail = require("./resendVerifyEmail");

module.exports = {
  register,
  login,
  getCurrent,
  update,
  logout,
  updateAvatar,
  verifyEmail,
  resendVerifyEmail,
};
