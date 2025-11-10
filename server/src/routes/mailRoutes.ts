import authmiddleware from "@server/auth/authmiddleware";
import { OTPtemplate } from "@server/mail/OTPmailtemplate";
import sendmail from "@server/mail/sendmail";
import { WelcomeTemplate } from "@server/mail/welcomemailtemplate";
import { GenerateUniqueOtp } from "@server/OTP/otp";
import { otpMap, saveOtp } from "@server/OTP/otpStore";
import { Hono } from "hono";

const mail = new Hono().basePath("/mail");
mail.use("/auth/*", authmiddleware);

mail.get("/forgetpassword/:email", async (c) => {});
mail.get("/user_verify/:email/:username", async (c) => {
  const { email, username } = c.req.param();

  const otp = await GenerateUniqueOtp(otpMap);
  saveOtp(email, otp);

  const otpMail = OTPtemplate(username, otp);
  const response = await sendmail(email, "OTP verification", otpMail);

  if (response == null) {
    return c.json({}, 200);
  }

  console.log("Error in sending in otp verification mail: ", response);
  return c.json({ error: "something went wrong" }, 404);
});
mail.get("/user_welcome/:email/:username", async (c) => {
  const { email, username } = c.req.param();
  const welcomeTempl = WelcomeTemplate(email, username);

  const err = await sendmail(email, "Welcome to BunDraw", welcomeTempl);
  if (err != null) {
    console.log("Error in sending welcome mail: ", err);
    return c.json({ error: "something went wrong!" }, 404);
  }

  return c.json({}, 200);
});

export default mail;
