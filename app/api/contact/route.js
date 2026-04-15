import nodemailer from 'nodemailer';

/**
 * Escapes user-controlled strings so they are safe to embed in HTML email bodies.
 */
function escapeHtml(text) {
  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  };
  return String(text).replace(/[&<>"']/g, (ch) => map[ch]);
}

/**
 * POST /api/contact
 * Accepts JSON: { fullName, email, phone, message }
 * Sends an HTML email via SMTP (Nodemailer) to RECEIVER_EMAIL.
 */
export async function POST(request) {
  try {
    const body = await request.json();
    const { fullName, email, phone, message } = body ?? {};

    // Require all fields (non-empty after trim)
    if (
      typeof fullName !== 'string' ||
      typeof email !== 'string' ||
      typeof phone !== 'string' ||
      typeof message !== 'string' ||
      !fullName.trim() ||
      !email.trim() ||
      !phone.trim() ||
      !message.trim()
    ) {
      return Response.json(
        { success: false, error: 'All fields are required.' },
        { status: 400 }
      );
    }

    const trimmedName = fullName.trim();
    const trimmedEmail = email.trim();
    const trimmedPhone = phone.trim();
    const trimmedMessage = message.trim();

    // Basic email shape check
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail);
    if (!emailOk) {
      return Response.json(
        { success: false, error: 'Invalid email address.' },
        { status: 400 }
      );
    }

    const host = process.env.SMTP_HOST;
    const portRaw = process.env.SMTP_PORT;
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    const receiver = process.env.RECEIVER_EMAIL;

    if (!host || !portRaw || !user || !pass || !receiver) {
      console.error('Contact API: missing SMTP environment variables');
      return Response.json(
        { success: false, error: 'Server configuration error.' },
        { status: 500 }
      );
    }

    const port = Number.parseInt(portRaw, 10);
    if (Number.isNaN(port)) {
      console.error('Contact API: invalid SMTP_PORT');
      return Response.json(
        { success: false, error: 'Server configuration error.' },
        { status: 500 }
      );
    }

    // A2 Hosting: 465 = SSL, 587 = STARTTLS — match Nodemailer defaults
    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: { user, pass },
    });

    const safeName = escapeHtml(trimmedName);
    const safeEmail = escapeHtml(trimmedEmail);
    const safePhone = escapeHtml(trimmedPhone);
    const safeMessage = escapeHtml(trimmedMessage).replace(/\n/g, '<br />');

    const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>New contact message</title>
</head>
<body style="margin:0;padding:24px;font-family:system-ui,-apple-system,Segoe UI,Roboto,sans-serif;font-size:16px;line-height:1.5;color:#1a1a1a;background:#f6f6f6;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:560px;margin:0 auto;background:#ffffff;border-radius:8px;overflow:hidden;box-shadow:0 1px 3px rgba(0,0,0,0.08);">
    <tr>
      <td style="padding:24px 28px;background:#111827;color:#ffffff;">
        <h1 style="margin:0;font-size:20px;font-weight:600;">New contact form message</h1>
      </td>
    </tr>
    <tr>
      <td style="padding:28px;">
        <p style="margin:0 0 12px;"><strong style="color:#374151;">Name</strong><br />${safeName}</p>
        <p style="margin:0 0 12px;"><strong style="color:#374151;">Email</strong><br /><a href="mailto:${encodeURIComponent(trimmedEmail)}" style="color:#2563eb;">${safeEmail}</a></p>
        <p style="margin:0 0 12px;"><strong style="color:#374151;">Phone</strong><br />${safePhone}</p>
        <p style="margin:0 0 8px;"><strong style="color:#374151;">Message</strong></p>
        <div style="margin:0;padding:16px;background:#f9fafb;border-radius:6px;border:1px solid #e5e7eb;">${safeMessage}</div>
      </td>
    </tr>
  </table>
</body>
</html>`;

    await transporter.sendMail({
      // "From" must be an address your SMTP account is allowed to send as (usually SMTP_USER).
      from: { name: trimmedName, address: user },
      to: receiver,
      replyTo: trimmedEmail,
      subject: `Contact form: ${trimmedName}`,
      html,
    });

    return Response.json({ success: true });
  } catch (err) {
    console.error('Contact API:', err);
    const message =
      err instanceof Error ? err.message : 'Failed to send message.';
    return Response.json({ success: false, error: message }, { status: 500 });
  }
}
