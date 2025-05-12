const mongoose = require("mongoose");
const mailSender = require("../Utils/mailSender");

const OTPSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  otp: {
    type: String,
    required: true,
  },
  created_at: {
    type: Date,
    default: Date.now(),
    expires: 5 * 60,
  },
});

// to send emails

async function sandVerificationMail(email, otp) {
  try {
    const mailResponse = await mailSender(
      email,
      "verification Email from eXpo",
      otp
    );
    console.log("Email send Successfully", mailResponse); 
  } catch (error) {
    console.log("error while sending mails", error);
  }
}
OTPSchema.pre("save", async function (next) {
  await sandVerificationMail(this.email, this.otp);
  next();
});

module.exports = mongoose.model("OTP", OTPSchema);
