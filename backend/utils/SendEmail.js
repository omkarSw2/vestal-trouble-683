const nodemailer = require("nodemailer");
require("dotenv").config();

const sendEmail = async (email, subject, text, html) => {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.HOST,
      service: process.env.SERVICE,
      port: process.env.SMTP_PORT,
      //   secure: true,
      auth: {
        user: process.env.USER,
        pass: process.env.PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.USER,
      to: email,
      subject: subject,
      text: text,
      html: html,
    });

    return { issue: false };
  } catch (error) {
    return { issue: true, error: error.message };
  }
};

module.exports = sendEmail;
