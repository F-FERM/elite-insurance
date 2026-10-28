import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^[+]?[0-9\s\-()]{7,20}$/;

const SERVICES = [
  "Motor Insurance",
  "Health & Life Insurance",
  "Travel & Personal Accident",
  "Business & Commercial",
  "Property & Home Insurance",
  "Policy Renewal Support",
];

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const name = String(body?.name ?? "").trim();
    const phone = String(body?.phone ?? "").trim();
    const email = String(body?.email ?? "").trim(); 
    const service = String(body?.service ?? "").trim();
    const message = String(body?.message ?? "").trim(); 

    if (!name || !phone || !service) {
      return NextResponse.json(
        { message: "Name, phone number and service are required" },
        { status: 400 },
      );
    }

    if (!PHONE_REGEX.test(phone)) {
      return NextResponse.json(
        { message: "Please enter a valid phone number" },
        { status: 400 },
      );
    }

    if (email && !EMAIL_REGEX.test(email)) {
      return NextResponse.json(
        { message: "Please enter a valid email address" },
        { status: 400 },
      );
    }

    if (!SERVICES.includes(service)) {
      return NextResponse.json(
        { message: "Please select a valid insurance service" },
        { status: 400 },
      );
    }

    if (
      name.length > 100 ||
      phone.length > 30 ||
      email.length > 150 ||
      message.length > 5000
    ) {
      return NextResponse.json(
        { message: "One or more fields are too long" },
        { status: 400 },
      );
    }

    // ---- Transporter (Gmail) ----
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, 
      },
    });

    const safeName = escapeHtml(name);
    const safePhone = escapeHtml(phone);
    const safeEmail = escapeHtml(email);
    const safeService = escapeHtml(service);
    const safeMessage = message
      ? escapeHtml(message).replace(/\n/g, "<br />")
      : "<em>(no message)</em>";
    const sentAt = new Date().toLocaleString("en-GB", {
      timeZone: "Asia/Kolkata",
    });

    const mailOptions = {
      from: `"Elite Insurance Website" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      ...(email
        ? { replyTo: `"${name.replace(/"/g, "")}" <${email}>` }
        : {}),
      subject: `[Enquiry] ${service} - ${name.replace(/[\r\n]+/g, " ")}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #172849; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              h2 { color: #ED3445; border-bottom: 2px solid #ED3445; padding-bottom: 10px; }
              .field { margin: 15px 0; }
              .label { font-weight: bold; color: #555; }
              .value { margin-top: 5px; padding: 10px; background: #F3F7FF; border-radius: 6px; }
              .footer { margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; color: #888; }
            </style>
          </head>
          <body>
            <div class="container">
              <h2>New insurance enquiry</h2>
              <p>A new consultation request was sent from the Elite Insurance Services website.</p>

              <div class="field">
                <div class="label">Name</div>
                <div class="value">${safeName}</div>
              </div>

              <div class="field">
                <div class="label">Phone</div>
                <div class="value"><a href="tel:${safePhone}">${safePhone}</a></div>
              </div>

              <div class="field">
                <div class="label">Email</div>
                <div class="value">${
                  email
                    ? `<a href="mailto:${safeEmail}">${safeEmail}</a>`
                    : "<em>(not provided)</em>"
                }</div>
              </div>

              <div class="field">
                <div class="label">Service needed</div>
                <div class="value">${safeService}</div>
              </div>

              <div class="field">
                <div class="label">Message</div>
                <div class="value">${safeMessage}</div>
              </div>

              <div class="footer">
                <p>Sent from the Elite Insurance Services website contact form.</p>
                <p>Sent at: ${sentAt}</p>
              </div>
            </div>
          </body>
        </html>
      `,
      text: `
New insurance enquiry

Name: ${name}
Phone: ${phone}
Email: ${email || "(not provided)"}
Service needed: ${service}
Message: ${message || "(no message)"}

Sent at: ${sentAt}
      `.trim(),
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { message: "Failed to send message. Please try again." },
      { status: 500 },
    );
  }
}