import { Resend, type ErrorResponse } from "resend";

const resend = new Resend("Bun.env.RESEND");

async function sendmail(
  email: string,
  subject: string,
  html: string,
): Promise<ErrorResponse | null> {
  const { data, error } = await resend.emails.send({
    from: "onboarding@resend.dev",
    to: email,
    subject: subject,
    html: html,
  });

  if (error) {
    return error;
  }

  return null;
}

export default sendmail;
