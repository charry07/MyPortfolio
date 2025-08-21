const express = require('express');
const router = express.Router();
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

// server used to send send emails
const app = express();
app.use(cors());
app.use(express.json());
app.use('/', router);
app.listen(process.env.PORT_SERVER, () => console.log(`Server Running on port ${process.env.PORT_SERVER}`));

const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASSWORD,
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Ready to Send');
  }
});

router.post('/contact', (req, res) => {
  const name = req.body.firstName + ' ' + req.body.lastName;
  const email = req.body.email;
  const message = req.body.message;
  const phone = req.body.phone;
  const subject = req.body.subject || 'General Inquiry';
  
  // Email template mejorado
  const htmlTemplate = `
    <!DOCTYPE html>
    <html>
    <head>
        <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(90deg, #aa367c, #4facfe); color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
            .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 8px 8px; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #aa367c; }
            .value { margin-top: 5px; padding: 10px; background: white; border-radius: 4px; border-left: 4px solid #aa367c; }
            .footer { text-align: center; margin-top: 20px; color: #666; font-size: 14px; }
            .timestamp { color: #999; font-size: 12px; }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1>🚀 New Contact from Portfolio</h1>
                <p>Anderson Charry Developer Portfolio</p>
            </div>
            <div class="content">
                <div class="field">
                    <div class="label">👤 Name:</div>
                    <div class="value">${name}</div>
                </div>
                <div class="field">
                    <div class="label">📧 Email:</div>
                    <div class="value">${email}</div>
                </div>
                <div class="field">
                    <div class="label">📱 Phone:</div>
                    <div class="value">${phone || 'Not provided'}</div>
                </div>
                <div class="field">
                    <div class="label">📋 Subject:</div>
                    <div class="value">${subject}</div>
                </div>
                <div class="field">
                    <div class="label">💬 Message:</div>
                    <div class="value">${message}</div>
                </div>
                <div class="footer">
                    <p class="timestamp">⏰ Received on: ${new Date().toLocaleString()}</p>
                    <p>🌟 This message was sent from your portfolio website</p>
                </div>
            </div>
        </div>
    </body>
    </html>
  `;

  // Email de confirmación automática para el cliente
  const autoReplyHtml = `
    <!DOCTYPE html>
    <html>
    <head>
        <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(90deg, #aa367c, #4facfe); color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
            .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 8px 8px; }
            .highlight { color: #aa367c; font-weight: bold; }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1>✅ Message Received!</h1>
                <p>Thank you for contacting Anderson Charry</p>
            </div>
            <div class="content">
                <p>Hi <span class="highlight">${name}</span>,</p>
                <p>Thanks for reaching out! I've received your message and will get back to you as soon as possible.</p>
                <p><strong>Your message summary:</strong></p>
                <p><em>"${message.substring(0, 100)}${message.length > 100 ? '...' : ''}"</em></p>
                <p>📧 I typically respond within 24-48 hours.</p>
                <p>🚀 In the meantime, feel free to check out my latest projects on GitHub or connect with me on LinkedIn.</p>
                <br>
                <p>Best regards,<br>
                <span class="highlight">Anderson Charry</span><br>
                Full Stack Developer</p>
            </div>
        </div>
    </body>
    </html>
  `;

  // Enviar email principal
  const mail = {
    from: `"Portfolio Contact" <${process.env.GMAIL_USER}>`,
    to: process.env.GMAIL_USER,
    subject: `🚀 New Portfolio Contact: ${subject} - from ${name}`,
    html: htmlTemplate,
    replyTo: email
  };

  // Enviar confirmación automática
  const autoReply = {
    from: `"Anderson Charry" <${process.env.GMAIL_USER}>`,
    to: email,
    subject: '✅ Message Received - Anderson Charry Portfolio',
    html: autoReplyHtml
  };

  // Enviar ambos emails
  Promise.all([
    new Promise((resolve, reject) => {
      contactEmail.sendMail(mail, (error, info) => {
        if (error) reject(error);
        else resolve(info);
      });
    }),
    new Promise((resolve, reject) => {
      contactEmail.sendMail(autoReply, (error, info) => {
        if (error) {
          console.log('Auto-reply failed:', error);
          resolve(null); // No fallar si la confirmación automática falla
        } else {
          resolve(info);
        }
      });
    })
  ])
  .then(() => {
    res.json({ 
      code: 200, 
      status: 'Message Sent Successfully',
      message: 'Your message has been sent and a confirmation email is on its way!'
    });
  })
  .catch((error) => {
    console.error('Email error:', error);
    res.status(500).json({ 
      code: 500, 
      status: 'Error', 
      message: 'Failed to send message. Please try again later.',
      error: error.message 
    });
  });
});
