import { Hono } from "hono";
import { cors } from "hono/cors";
import user from "./routes/userRoutes";

export const app = new Hono()

  .use(cors())

  .get("/", (c) => {
    return c.text("Hello Hono!");
  });

app.route("/", user);

export default app;
