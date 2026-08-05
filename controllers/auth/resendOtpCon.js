const { mailSender } = require("../../helpers/mailService");
const { generateOTP } = require("../../helpers/utils");
const userSchema = require("../../models/userSchema");

// --------reSend otp controller
const resendOtp = async (req, res) => {
  const { email } = req.body;

  try {
    const user = await userSchema.findOne({
      email,
      isVerified: false,
    });

    if (!user) return res.status(400).send("inavlid request");

    // ----------otp generator
    const otp = generateOTP();
    user.otp = otp;
    user.otpExpires = Date.now() + 5 * 60 * 1000;

    // ---------send otp to user mail
    await mailSender({
      email,
      subject: "Otp Verifications ",
      otp,
    });

    // ---------save data base stor
    await user.save();

    res.status(200).send("reSendOtp Successfully");
  } catch (error) {
    console.log(error);
    res.status(500).send(`Server Error: ${error.message}`);
  }
};

module.exports = {
  resendOtp,
};
