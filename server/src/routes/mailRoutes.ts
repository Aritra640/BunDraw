import authmiddleware from "@server/auth/authmiddleware";
import { Hono } from "hono";

const mail = new Hono().basePath("/mail");
mail.use("/auth/*", authmiddleware);

mail.get("/forgetpassword/:email", async (c) => {});
mail.get("/user_verify/:email/:username", async (c) => {});
mail.get("/user_welcome/:email/:username", async (c) => {});


export default mail;
