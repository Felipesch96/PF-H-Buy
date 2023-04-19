const nodemailer = require("nodemailer")

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: "henry.buy23@gmail.com", // generated ethereal user
    pass: "esivdhrrmkmyjzuw", // generated ethereal password
  },
});


module.exports = transporter