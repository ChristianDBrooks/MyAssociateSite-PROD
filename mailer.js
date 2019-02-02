const data = require('./associate.js')

const mailer = function (email, subject, name, company, phone, message, domain) {
    const nodemailer = require('nodemailer');
    console.log("NodeMailer online!")

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.AUTO_EMAIL_USER,
            pass: process.env.AUTO_EMAIL_PASS,
        }
    });

    const mailOptions = {
        from: data.sendFrom, // sender address
        to: data.sendTo, // list of receivers
        subject: subject, // Subject line
        html: `
                <p>A user just contacted you from your contact page at www.scottbrooksassociates.com. Any reponse should go to ${name} at ${email}.</p>
                <br>
                <p><b>Name: </b>${name}</p>
                <p><b>Company: </b>${company}</p>
                <p><b>Email: </b>${email}</p>
                <p><b>Phone: </b>${phone}</p>
                <p><b>Subject: </b>${subject}</p>
                <p><b>Message: </b>${message}</p>
                <br>
                <p>Notice: This is an automated email, sent to you through an auto-generated email, because someone submitted a new message through the contact page of your website at domain, ${domain}.</p>`
    };

    // send mail with defined transport object
    console.log("Attempting to send message! ...")
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        } else {
            console.log('Message sent: %s', info.messageId);
        }
    })
}

module.exports = mailer;