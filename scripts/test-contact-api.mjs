/**
 * Contact API smoke test.
 *
 * 1) Terminal 1: npm run dev   (keep running)
 * 2) Terminal 2: npm run test:contact
 *
 * Success: prints status 200 and { success: true }
 * Failure: prints status + error body (check SMTP / .env.local)
 */

const BASE = process.env.TEST_URL ?? 'http://localhost:3000';

async function main() {
  const url = `${BASE.replace(/\/$/, '')}/api/contact`;

  const payload = {
    fullName: 'API Test User',
    email: 'test@example.com',
    phone: '5551234567',
    message: 'This is an automated test from scripts/test-contact-api.mjs',
  };

  console.log('POST', url);
  console.log('Body:', JSON.stringify(payload, null, 2));
  console.log('---');

  let res;
  try {
    res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
  } catch (e) {
    console.error('Fetch failed (is `npm run dev` running?)');
    console.error(e.message);
    process.exit(1);
  }

  const text = await res.text();
  let data;
  try {
    data = JSON.parse(text);
  } catch {
    data = text;
  }

  console.log('HTTP status:', res.status);
  console.log('Response:', typeof data === 'string' ? data : JSON.stringify(data, null, 2));

  if (res.ok && data && data.success === true) {
    console.log('\nOK: Form/API path works. Check RECEIVER_EMAIL inbox for the email.');
    process.exit(0);
  }

  console.error('\nFAIL: Fix SMTP / .env.local or see error above.');
  process.exit(1);
}

main();
