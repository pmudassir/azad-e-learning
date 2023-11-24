const nodeMailer = require("nodemailer");
const ejs = require("ejs");
const path = require('path');

const emailVerification = async ({ email, username, verificationToken }) => {
  const transporter = nodeMailer.createTransport({
    service: process.env.SMTP_SERVICE,
    auth: {
      user: process.env.SMTP_MAIL,
      pass: process.env.SMTP_PASSWORD,
    },
  });
  const templatePath = path.join(__dirname, 'activation-mail.ejs');
  
  const templateData = {
      username: username,
      verificationToken: verificationToken,
    };
    
    console.log(templateData);
  const template = await ejs.renderFile(templatePath, templateData);

  const mailOptions = {
    from: process.env.SMTP_MAIL,
    to: email,
    subject: "Email Verification",
    html:template,
  };

  await transporter.sendMail(mailOptions);
  console.log("mail sent success");
};

module.exports = emailVerification;
