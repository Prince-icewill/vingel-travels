// Submits form data to Formspree (https://formspree.io) or any endpoint that
// accepts a JSON POST and returns { ok: true } on success.
//
// Setup:
// 1. Create a free account at https://formspree.io
// 2. Create a form, copy its endpoint (looks like https://formspree.io/f/abc123)
// 3. Add it to your .env file as REACT_APP_BOOKING_FORM_ENDPOINT / REACT_APP_CONTACT_FORM_ENDPOINT
// 4. Restart `npm start` after editing .env — Create React App only reads it on startup.
//
// If no endpoint is configured, submitForm throws a clear error instead of
// silently pretending to succeed, so this is impossible to miss in development.

export async function submitForm(endpoint, data) {
  if (!endpoint) {
    throw new Error(
      "No form endpoint configured. Add REACT_APP_BOOKING_FORM_ENDPOINT and " +
        "REACT_APP_CONTACT_FORM_ENDPOINT to a .env file — see .env.example."
    );
  }

  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    let message = "Something went wrong submitting the form. Please try again.";
    try {
      const body = await response.json();
      if (body?.errors?.length) {
        message = body.errors.map((e) => e.message).join(", ");
      }
    } catch {
      // response wasn't JSON — keep the generic message
    }
    throw new Error(message);
  }

  return true;
}
