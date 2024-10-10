// src/lib/mailer.js
import nodemailer from 'nodemailer';

export async function sendOtpEmail(email, otp) {
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD
    },
    tls: {
      // do not fail on invalid certs
      rejectUnauthorized: false
    }
  });

  const mailOptions = {
    from: process.env.EMAIL_FROM,
    to: email,
    subject: 'Konfirmasi OTP EMAIL - DSERTIFIKAT',
    html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <style>
                body {
                  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                  margin: 0;
                  padding: 0;
                  background: rgb(255,255,255);
                  background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(158,235,182,0.70) 100%);
                  height: 100vh;
                }
                .container {
                  max-width: 600px;
                  margin: 40px auto;
                  background-color: #ffffff;
                  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
                  border-radius: 8px;
                  overflow: hidden;
                }
                .header {
                  background-color: #6cc1c4;
                  color: #ffffff;
                  padding: 20px;
                  text-align: center;
                  font-size: 24px;
                }
                .content {
                  padding: 20px;
                  text-align: center;
                  color: #333;
                }
                .otp {
                  font-size: 24px;
                  letter-spacing: 3px;
                  color: #008080;
                  padding: 10px 20px;
                  background-color: #f0f0f0;
                  border-radius: 5px;
                  display: inline-block;
                  margin: 20px 0;
                }
                .footer {
                  font-size: 14px;
                  color: #666;
                  text-align: center;
                  padding: 12px 20px;
                  background-color: #f9f9f9;
                }
                a {
                  color: #007bff;
                  text-decoration: none;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="header">
                    <h1>Secure Login</h1>
                </div>
                <div class="content">
                    <p>Dear User,</p>
                    <p>Kode OTP untuk mengakses akun anda adalah :</p>
                    <div class="otp">${otp}</div>
                    <p>masukkan kode di menu valiasi OTP. Kode tersebut akan aktif selama 30 menit dan jangan bagikan kepada siapapun.</p>
                </div>
                <div class="footer">
                    jika anda tidak melakukan request kode otp, abaikan pesan ini dan kontak tim support kami untuk bantuan lebih lanjut.
                </div>
            </div>
        </body>
        </html>
    `
};

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}
