import nodemailer from "nodemailer";

/**
 * Nodemailer transporter configured for Gmail using App Password.
 * Uses EMAIL_USER and EMAIL_PASS from environment variables.
 */
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export type SendMailOptions = {
  to: string;
  subject: string;
  text: string;
  html?: string;
  replyTo?: string;
};

/**
 * Sends an email using the configured Gmail transporter.
 * @param options - Mail options (to, subject, text, optional html, optional replyTo)
 * @returns Promise resolving to the nodemailer result
 */
export async function sendEmail(options: SendMailOptions): Promise<nodemailer.SentMessageInfo> {
  const from = process.env.EMAIL_USER;
  const mailOptions: nodemailer.SendMailOptions = {
    from: `"Vicint" <${from}>`,
    to: options.to,
    subject: options.subject,
    text: options.text,
    html: options.html ?? options.text,
    replyTo: options.replyTo,
  };
  return transporter.sendMail(mailOptions);
}
