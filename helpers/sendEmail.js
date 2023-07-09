const nodemailer = require("nodemailer");
require("dotenv").config();

const { META_PASSWORD } = process.env;

const nodemailerConfig = {
  //   service: "gmail",
  host: "smtp.meta.ua",
  port: 465,
  secure: true,
  //   logger: true,
  //   debug: true,
  //   secureConnection: false,
  auth: {
    user: "demniks@meta.ua",
    pass: META_PASSWORD,
  },
//   tls: {
//     rejectUnAuthorized: true,
//   },
};

const transport = nodemailer.createTransport(nodemailerConfig);

const sendEmail = async (data) => {
  const email = { ...data, from: "demniks@meta.ua" };
  await transport.sendMail(email);

  return true;
};

module.exports = sendEmail;
