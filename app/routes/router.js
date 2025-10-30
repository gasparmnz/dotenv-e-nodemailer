var express = require("express");
var router = express.Router();

router.get("/", (req, res) => {
    res.render("pages/cadastrar_produto");
    const mailOptions = {
  from: "gasparzin189@gmail.com",
  to: "gasparzin189@gmail.com",
  subject: "envio do formulário",
  text: "mensagem em formato texto",
  html: "<h1>mensagem em formato HTML</h1>"
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log(error);
  } else {
    console.log(info);

    console.log("email enviado")
  }
});
  });

const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  },
  tls: {
    secure: false,
    ignoreTLS: true,
    rejectUnauthorized: false,
  }
});



  module.exports = router;