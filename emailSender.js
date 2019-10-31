const nodemailer = require('nodemailer')
const options = require('./options.json')

class EmailSender {
  async send(req, res) {
    let transporter = nodemailer.createTransport(options)

    const { email_from, to, subject, text_content, html_content } = JSON.parse(req.body.data)

    const receivers = []

    to.map(async ({ email }) => {
      receivers.push(email)
    })

    await transporter.sendMail({
      from: email_from.email, // sender address
      to: receivers, // list of receivers
      subject, // Subject line
      text: text_content, // plain text body
      html: html_content // html body
    });

    return res.json({ response: "Email enviado com sucesso" }).status(200)
  }
}

module.exports = new EmailSender()