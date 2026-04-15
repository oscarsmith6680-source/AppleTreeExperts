/**
 * Sends homepage / service / contact forms to POST /api/contact.
 * @param {{ name: string; email: string; phone: string; message: string }} formData
 * @returns {Promise<{ ok: true } | { ok: false; error: string }>}
 */
export async function submitContactForm(formData) {
  const res = await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      fullName: formData.name.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim() || 'Not provided',
      message: formData.message.trim(),
    }),
  });

  const data = await res.json().catch(() => ({}));

  if (!res.ok || !data.success) {
    return {
      ok: false,
      error: data.error || 'Something went wrong. Please try again.',
    };
  }

  return { ok: true };
}
