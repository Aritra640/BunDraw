import authmiddleware from "@server/auth/authmiddleware";
import sendmail from "@server/mail/sendmail";
import { WelcomeTemplate } from "@server/mail/welcomemailtemplate";
import { Hono } from "hono";

const mail = new Hono().basePath("/mail");
mail.use("/auth/*", authmiddleware);

mail.get("/forgetpassword/:email", async (c) => {});
mail.get("/user_verify/:email/:username", async (c) => {});
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
