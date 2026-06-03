/**
 * Server-side reCAPTCHA v3 verification.
 * Returns true if the token is valid and the score is above the threshold.
 */
export async function verifyRecaptcha(token: string): Promise<boolean> {
  const secret = process.env.RECAPTCHA_SECRET_KEY;
  if (!secret) {
    console.warn("[recaptcha] RECAPTCHA_SECRET_KEY not set — skipping verification");
    return true;
  }

  try {
    const res = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `secret=${secret}&response=${token}`,
    });
    const data = await res.json();
    // Accept scores >= 0.5 (Google recommends 0.5 as a reasonable threshold)
    return data.success === true && (data.score ?? 0) >= 0.5;
  } catch (err) {
    console.error("[recaptcha] verification error", err);
    return false;
  }
}
