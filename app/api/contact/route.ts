import { NextResponse } from "next/server";
import { sendEmail } from "@/lib/email";
import { ratelimit } from "@/lib/rateLimit";

// Placeholder: replace with actual owner email in production
const OWNER_EMAIL = process.env.OWNER_EMAIL as string;

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^[0-9]{10}$/;
const nameRegex = /^[A-Za-z\s.'-]{2,60}$/;
const meaningfulTextRegex = /\b[A-Za-z]{3,}\b/;

/**
 * Contact form payload (formType === "contact")
 */
type ContactPayload = {
  formType: "contact";
  fullName: string;
  email: string;
  phone: string;
  message: string;
};

/**
 * Consultation form payload (formType === "consultation")
 */
type ConsultationPayload = {
  formType: "consultation";
  fullName: string;
  email: string;
  phone: string;
  city: string;
  budget: string;
  timeline: string;
  propertyType: string;
  mode: string;
  preferredDate: string;
  preferredTime: string;
  notes: string;
};

type RequestPayload = ContactPayload | ConsultationPayload;

/**
 * Builds plain text and HTML body for contact form notification to owner.
 */
function buildContactOwnerEmail(p: ContactPayload): { text: string; html: string } {
  const text = [
    `New Contact Form Submission`,
    ``,
    `Name: ${p.fullName}`,
    `Email: ${p.email}`,
    `Phone: ${p.phone}`,
    ``,
    `Message:`,
    p.message,
  ].join("\n");

  const html = `
    <h2>New Contact Form Submission</h2>
    <p><strong>Name:</strong> ${escapeHtml(p.fullName)}</p>
    <p><strong>Email:</strong> ${escapeHtml(p.email)}</p>
    <p><strong>Phone:</strong> ${escapeHtml(p.phone)}</p>
    <p><strong>Message:</strong></p>
    <p>${escapeHtml(p.message).replace(/\n/g, "<br>")}</p>
  `;

  return { text, html };
}

/**
 * Builds plain text and HTML body for consultation form notification to owner.
 */
function buildConsultationOwnerEmail(p: ConsultationPayload): { text: string; html: string } {
  const text = [
    `New Private Consultation Request`,
    ``,
    `Name: ${p.fullName}`,
    `Email: ${p.email}`,
    `Phone: ${p.phone}`,
    `City: ${p.city}`,
    `Budget: ${p.budget}`,
    `Timeline: ${p.timeline}`,
    `Property Type: ${p.propertyType}`,
    `Mode: ${p.mode}`,
    `Preferred Date: ${p.preferredDate}`,
    `Preferred Time: ${p.preferredTime}`,
    ``,
    `Notes:`,
    p.notes || "(none)",
  ].join("\n");

  const html = `
    <h2>New Private Consultation Request</h2>
    <p><strong>Name:</strong> ${escapeHtml(p.fullName)}</p>
    <p><strong>Email:</strong> ${escapeHtml(p.email)}</p>
    <p><strong>Phone:</strong> ${escapeHtml(p.phone)}</p>
    <p><strong>City:</strong> ${escapeHtml(p.city)}</p>
    <p><strong>Budget:</strong> ${escapeHtml(p.budget)}</p>
    <p><strong>Timeline:</strong> ${escapeHtml(p.timeline)}</p>
    <p><strong>Property Type:</strong> ${escapeHtml(p.propertyType)}</p>
    <p><strong>Mode:</strong> ${escapeHtml(p.mode)}</p>
    <p><strong>Preferred Date:</strong> ${escapeHtml(p.preferredDate)}</p>
    <p><strong>Preferred Time:</strong> ${escapeHtml(p.preferredTime)}</p>
    <p><strong>Notes:</strong></p>
    <p>${escapeHtml(p.notes || "(none)").replace(/\n/g, "<br>")}</p>
  `;

  return { text, html };
}

/**
 * Auto-reply message sent to the customer.
 */
function buildAutoReplyContent(formType: "contact" | "consultation"): { subject: string; text: string; html: string } {
  const subject = formType === "contact"
    ? "We've received your enquiry – Vicint"
    : "We've received your consultation request – Vicint";

  const text = [
    `Thank you for getting in touch.`,
    ``,
    formType === "contact"
      ? "Our advisory desk will reach out within one business day."
      : "Our team will confirm your appointment within one business day.",
    ``,
    "Best regards,",
    "Vicint",
  ].join("\n");

  const html = `
    <p>Thank you for getting in touch.</p>
    <p>${formType === "contact"
      ? "Our advisory desk will reach out within one business day."
      : "Our team will confirm your appointment within one business day."}</p>
    <p>Best regards,<br>Vicint</p>
  `;

  return { subject, text, html };
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/**
 * POST /api/contact
 * Handles both Contact and Private Consultation form submissions.
 * Sends notification to owner and auto-reply to customer.
 */
export async function POST(request: Request) {
  try {
    // Parse JSON body and validate formType
    const body = (await request.json()) as RequestPayload;

    if ((body as Record<string, unknown>).company) {
      return NextResponse.json({ success: true });
    }

    const ip =
      request.headers.get("x-forwarded-for") ??
      "anonymous";

    const { success } = await ratelimit.limit(ip);

    if (!success) {
      return NextResponse.json(
        { success: false, error: "Too many requests" },
        { status: 429 }
      );
    }

    if (!body || typeof body.formType !== "string") {
      return NextResponse.json(
        { success: false, error: "Missing or invalid formType" },
        { status: 400 }
      );
    }

    const formType = body.formType as "contact" | "consultation";

    // --- Contact form: send owner notification + auto-reply ---
    if (formType === "contact") {
      const payload = body as ContactPayload;
      const { fullName, email, phone, message } = payload;

      if (!fullName || !email || !phone || message === undefined) {
        return NextResponse.json(
          { success: false, error: "Missing required contact fields" },
          { status: 400 }
        );
      }

      if (!nameRegex.test(fullName)) {
        return NextResponse.json(
          { success: false, error: "Invalid name format" },
          { status: 400 }
        );
      }
      if (!emailRegex.test(email)) {
        return NextResponse.json(
          { success: false, error: "Invalid email address" },
          { status: 400 }
        );
      }
      if (!phoneRegex.test(phone)) {
        return NextResponse.json(
          { success: false, error: "Invalid phone number" },
          { status: 400 }
        );
      }
      if (
        message.trim().length < 10 ||
        !meaningfulTextRegex.test(message)
      ) {
        return NextResponse.json(
          { success: false, error: "Message must contain meaningful words" },
          { status: 400 }
        );
      }

      // Send notification email to owner
      const ownerContent = buildContactOwnerEmail(payload);
      await sendEmail({
        to: OWNER_EMAIL,
        subject: `Contact Form: ${fullName}`,
        text: ownerContent.text,
        html: ownerContent.html,
        replyTo: email,
      });

      // Send auto-reply to customer
      const autoReply = buildAutoReplyContent("contact");
      await sendEmail({
        to: email,
        subject: autoReply.subject,
        text: autoReply.text,
        html: autoReply.html,
      });
    }
    // --- Consultation form: send owner notification + auto-reply ---
    else if (formType === "consultation") {
      const payload = body as ConsultationPayload;
      const {
        fullName,
        email,
        phone,
        city,
        budget,
        timeline,
        propertyType,
        mode,
        preferredDate,
        preferredTime,
        notes,
      } = payload;

      if (!fullName || !email || !phone) {
        return NextResponse.json(
          { success: false, error: "Missing required consultation fields" },
          { status: 400 }
        );
      }

      if (!nameRegex.test(fullName)) {
        return NextResponse.json(
          { success: false, error: "Invalid name format" },
          { status: 400 }
        );
      }
      if (!emailRegex.test(email)) {
        return NextResponse.json(
          { success: false, error: "Invalid email address" },
          { status: 400 }
        );
      }
      if (!phoneRegex.test(phone)) {
        return NextResponse.json(
          { success: false, error: "Invalid phone number" },
          { status: 400 }
        );
      }
      if (
        notes &&
        (notes.trim().length < 10 ||
          !meaningfulTextRegex.test(notes))
      ) {
        return NextResponse.json(
          { success: false, error: "Notes must contain meaningful words" },
          { status: 400 }
        );
      }

      // Send notification email to owner
      const ownerContent = buildConsultationOwnerEmail({
        ...payload,
        city: city ?? "",
        budget: budget ?? "",
        timeline: timeline ?? "",
        propertyType: propertyType ?? "",
        mode: mode ?? "",
        preferredDate: preferredDate ?? "",
        preferredTime: preferredTime ?? "",
        notes: notes ?? "",
      });
      await sendEmail({
        to: OWNER_EMAIL,
        subject: `Consultation Request: ${fullName}`,
        text: ownerContent.text,
        html: ownerContent.html,
        replyTo: email,
      });

      // Send auto-reply to customer
      const autoReply = buildAutoReplyContent("consultation");
      await sendEmail({
        to: email,
        subject: autoReply.subject,
        text: autoReply.text,
        html: autoReply.html,
      });
    } else {
      return NextResponse.json(
        { success: false, error: "Invalid formType" },
        { status: 400 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { success: false, error: "Failed to send email" },
      { status: 500 }
    );
  }
}
