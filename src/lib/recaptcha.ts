/**
 * Server-side reCAPTCHA v2 verification.
 * Returns true if the token is valid (checkbox was checked by a human).
 */
export async function verifyRecaptcha(token: string): Promise<boolean> {
  const secret = process.env.RECAPTCHA_SECRET_KEY;
  if (!secret) {
    console.warn("[recaptcha] RECAPTCHA_SECRET_KEY not set — skipping verification");
    return true;
  }
  if (!token) return false;

  try {
    const res = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `secret=${secret}&response=${token}`,
    });
    const data = await res.json();
    return data.success === true;
  } catch (err) {
    console.error("[recaptcha] verification error", err);
    return false;
  }
}
