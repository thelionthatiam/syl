import * as nodeMailer from 'nodemailer';

var transporter = nodeMailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'this1234567890is1234567890test@gmail.com',
    pass: 'Mapex133'
  }
});

var mailOptions:any = {
  from: 'juliantheberge@gmail.com',
  to: null,
  subject: 'Password reset from form app',
  text: "http://localhost:8000/forgot-password/authorized"
};
export {
  transporter,
  mailOptions
}
