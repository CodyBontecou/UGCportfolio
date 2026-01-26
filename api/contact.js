import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  // Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, company, message } = req.body;

  // Validate required fields
  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required' });
  }

  try {
    // Send notification email to Daniela
    await resend.emails.send({
      from: 'Portfolio Contact <contact@danielabontecou.com>',
      to: 'daniela@isolated.tech',
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || 'Not provided'}</p>
        <p><strong>Message:</strong></p>
        <p>${message || 'No message provided'}</p>
      `,
    });

    // Send confirmation email to user
    await resend.emails.send({
      from: 'Daniela Bontecou <contact@danielabontecou.com>',
      to: email,
      subject: 'Thanks for reaching out! 🎬',
      html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <style>
            body {
              margin: 0;
              padding: 0;
              font-family: 'Helvetica Neue', Arial, sans-serif;
              background-color: #FAF7F2;
            }
            .email-wrapper {
              max-width: 600px;
              margin: 0 auto;
              background-color: #FAF7F2;
            }
            .email-header {
              background: linear-gradient(135deg, #C4654A 0%, #D4826A 100%);
              padding: 40px 30px;
              text-align: center;
            }
            .email-header h1 {
              margin: 0;
              color: #FAF7F2;
              font-size: 28px;
              font-weight: 400;
              font-family: Georgia, serif;
              font-style: italic;
            }
            .email-body {
              padding: 40px 30px;
              background-color: #FFFFFF;
            }
            .greeting {
              font-size: 18px;
              color: #2A2A2A;
              margin-bottom: 20px;
            }
            .content {
              font-size: 16px;
              line-height: 1.6;
              color: #4A4A4A;
              margin-bottom: 20px;
            }
            .stats-box {
              background-color: #FAF7F2;
              padding: 20px;
              border-radius: 8px;
              margin: 30px 0;
              text-align: center;
            }
            .stats-box p {
              margin: 5px 0;
              color: #2A2A2A;
              font-size: 14px;
            }
            .stats-box strong {
              color: #C4654A;
              font-size: 18px;
            }
            .social-links {
              text-align: center;
              margin: 30px 0;
            }
            .social-button {
              display: inline-block;
              margin: 10px;
              padding: 12px 30px;
              background-color: #2A2A2A;
              color: #FAF7F2 !important;
              text-decoration: none;
              border-radius: 25px;
              font-size: 14px;
              font-weight: 500;
            }
            .social-button:hover {
              background-color: #C4654A;
            }
            .signature {
              margin-top: 30px;
              font-size: 16px;
              color: #2A2A2A;
            }
            .signature-name {
              font-family: Georgia, serif;
              font-size: 20px;
              color: #C4654A;
              font-style: italic;
            }
            .email-footer {
              padding: 30px;
              text-align: center;
              color: #8B8B8B;
              font-size: 12px;
            }
            .divider {
              height: 1px;
              background-color: #F0EBE3;
              margin: 30px 0;
            }
          </style>
        </head>
        <body>
          <div class="email-wrapper">
            <div class="email-header">
              <h1>Thanks for reaching out!</h1>
            </div>

            <div class="email-body">
              <p class="greeting">Hi ${name}! ✨</p>

              <p class="content">
                Thank you so much for getting in touch! I'm excited to learn more about your project${company ? ` at ${company}` : ''}.
              </p>

              <p class="content">
                I've received your message and will get back to you within 24-48 hours. I can't wait to hear more about how we can collaborate to create authentic, scroll-stopping content together!
              </p>

              <div class="stats-box">
                <p><strong>2.2M+</strong> content views</p>
                <p><strong>10+</strong> brand collaborations</p>
                <p>Creating content that converts 🎥</p>
              </div>

              <div class="divider"></div>

              <p class="content" style="text-align: center; margin-bottom: 10px;">
                In the meantime, check out my latest work:
              </p>

              <div class="social-links">
                <a href="https://www.instagram.com/danielagzba" class="social-button">📸 Instagram</a>
                <a href="https://www.tiktok.com/@danybontecou" class="social-button">🎬 TikTok</a>
              </div>

              <div class="signature">
                <p>Looking forward to creating something amazing together!</p>
                <p style="margin-top: 15px;">Best,</p>
                <p class="signature-name">Daniela</p>
              </div>
            </div>

            <div class="email-footer">
              <p>Daniela Bontecou — UGC Creator & Content Strategist</p>
              <p>Rincón, Puerto Rico 🇵🇷</p>
            </div>
          </div>
        </body>
        </html>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Email send error:', error);
    return res.status(500).json({ error: 'Failed to send email' });
  }
}
