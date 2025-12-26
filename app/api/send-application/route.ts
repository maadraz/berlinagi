import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();

    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const linkedin = formData.get('linkedin') as string;
    const github = formData.get('github') as string;
    const message = formData.get('message') as string;
    const jobTitle = formData.get('jobTitle') as string;
    const isGeneralInquiry = formData.get('isGeneralInquiry') === 'true';
    const cvFile = formData.get('cv') as File | null;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Create transporter using Gmail
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    // Prepare email subject
    const subject = isGeneralInquiry
      ? 'General Inquiry - BerlinAGI Website'
      : `Job Application: ${jobTitle}`;

    // Prepare email HTML body
    const htmlBody = `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background-color: #2D5A8A; color: white; padding: 20px; border-radius: 5px 5px 0 0; }
          .content { background-color: #f9f9f9; padding: 20px; border: 1px solid #ddd; border-top: none; }
          .field { margin-bottom: 15px; }
          .label { font-weight: bold; color: #2D5A8A; }
          .value { margin-top: 5px; }
          .message-box { background-color: white; padding: 15px; border-left: 3px solid #2D5A8A; margin-top: 10px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2 style="margin: 0;">${isGeneralInquiry ? 'New General Inquiry' : 'New Job Application'}</h2>
            ${!isGeneralInquiry ? `<p style="margin: 5px 0 0 0; opacity: 0.9;">${jobTitle}</p>` : ''}
          </div>
          <div class="content">
            <div class="field">
              <div class="label">Name:</div>
              <div class="value">${name}</div>
            </div>

            <div class="field">
              <div class="label">Email:</div>
              <div class="value"><a href="mailto:${email}">${email}</a></div>
            </div>

            ${linkedin ? `
            <div class="field">
              <div class="label">LinkedIn:</div>
              <div class="value"><a href="${linkedin}" target="_blank">${linkedin}</a></div>
            </div>
            ` : ''}

            ${github ? `
            <div class="field">
              <div class="label">GitHub:</div>
              <div class="value"><a href="${github}" target="_blank">${github}</a></div>
            </div>
            ` : ''}

            <div class="field">
              <div class="label">Message:</div>
              <div class="message-box">${message.replace(/\n/g, '<br>')}</div>
            </div>

            ${cvFile ? `
            <div class="field">
              <div class="label">CV Attached:</div>
              <div class="value">✓ ${cvFile.name}</div>
            </div>
            ` : ''}
          </div>
        </div>
      </body>
      </html>
    `;

    // Prepare attachments
    const attachments = [];
    if (cvFile) {
      const buffer = Buffer.from(await cvFile.arrayBuffer());
      attachments.push({
        filename: cvFile.name,
        content: buffer,
      });
    }

    // Send email
    await transporter.sendMail({
      from: `"BerlinAGI Website" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER, // Send to the same Gmail account
      replyTo: email, // Allow easy reply to applicant
      subject: subject,
      html: htmlBody,
      attachments: attachments,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
