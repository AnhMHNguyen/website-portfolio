/* eslint-disable import/no-anonymous-default-export */
const mail = require('@sendgrid/mail');

mail.setApiKey(process.env.SENDGRID_API_KEY);

export default async (req, res) => {
  const body = JSON.parse(req.body);
  const message = `
    Name: ${body.name}\r\n
    Email: ${body.email}\r\n
    Subject: ${body.subject}\r\n
    Message: ${body.message}
  `;

  const data = {
    to: 'anhmh.nguyen01@gmail.com',
    from: 'hello@anhmh.me',
    subject: 'New web form message!',
    text: message,
    html: message.replace(/\r\n/g, '<br>')
  };
  try { 
    await mail.send(data);
    res.status(200).json({message: 'OK'});
  } catch (error) {
    res.status(500).json({message: 'something went wrong', error})
  }

}