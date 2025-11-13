var express = require("express");
var router = express.Router();
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  },
  tls: {
    rejectUnauthorized: false,
  }
});
router.get("/", (req, res) => {
    res.render("pages/cadastrar_produto");
});

router.post("/enviar-formulario", (req, res) => {
    const { nome, email, telefone, assunto, mensagem } = req.body;

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER,
        replyTo: email,
        subject: `Novo Contato: ${assunto}`,
        html: `
            <h1>Nova mensagem do formulário!</h1>
            <p><strong>Nome:</strong> ${nome}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Telefone:</strong> ${telefone}</p>
            <hr>
            <h2>Mensagem:</h2>
            <p>${mensagem}</p>
        `
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log("Erro ao enviar e-mail:", error);
            res.status(500).send("Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente.");
        } else {
            console.log("E-mail enviado com sucesso:", info.response);
            res.send("<h1>Mensagem enviada com sucesso!</h1><a href='/'>Voltar</a>");
        }
    });
});

module.exports = router;
