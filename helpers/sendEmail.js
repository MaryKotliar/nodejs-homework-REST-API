const sgMail = require("@sendgrid/mail");
const dotenv = require("dotenv");
dotenv.config();

const { SENDGRID_API_KEY } = process.env;
console.log(SENDGRID_API_KEY);
sgMail.setApiKey(SENDGRID_API_KEY);

const sendEmail = async (data) => {
  const email = { ...data, from: "kotliarmaryna@meta.ua" };
  await sgMail.send(email);
  return true;
};

module.exports = sendEmail;
