import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_SERVER_HOST,
  port: parseInt(process.env.EMAIL_SERVER_PORT || "587"),
  auth: {
    user: process.env.EMAIL_SERVER_USER,
    pass: process.env.EMAIL_SERVER_PASSWORD,
  },
});

export const sendResetEmail = async (email: string, otp: string) => {
  const mailOptions = {
    from: `"Aurelia Artisan" <${process.env.EMAIL_FROM}>`,
    to: email,
    subject: "Reset Your Password - Aurelia",
    html: `
      <div style="font-family: serif; max-width: 600px; margin: auto; padding: 40px; border: 1px solid #eee;">
        <h2 style="text-transform: uppercase; letter-spacing: 0.2em; text-align: center;">Aurelia</h2>
        <p style="font-size: 16px; line-height: 1.6; color: #333;">A request has been received to reset your account password. Use the verification code below to proceed.</p>
        <div style="background: #f9f9f9; padding: 20px; text-align: center; margin: 30px 0;">
          <span style="font-size: 32px; letter-spacing: 0.3em; font-weight: bold;">${otp}</span>
        </div>
        <p style="font-size: 14px; color: #666;">This code will expire in 10 minutes. If you did not request this, please ignore this email.</p>
        <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;" />
        <p style="font-size: 12px; color: #999; text-align: center;">Exquisitely Crafted Surfaces & Fine Living</p>
      </div>
    `,
  };

  await transporter.sendMail(mailOptions);
};
