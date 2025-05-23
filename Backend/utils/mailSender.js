const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
dotenv.config();
const mailSender = async (email, title, body) => {
  try {
    let transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASSWORD,
      },
    });
    const info = await transporter.sendMail({
      from: "Study Notion || eXpo - by Alok ",
      to: `${email}`,
      subject: `${title}`,
      html: `${body}`,
    });

    console.log("Message sent:", info);

    return info;
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = mailSender;
