import { createMiddleware } from "hono/factory";
import { verifyJwt } from "./jwt";

const authmiddleware = createMiddleware(async (c, next) => {
  console.log("authentication middleware has been called");

  const authHeader = c.req.header("Authentication");
  if (!authHeader) {
    return c.json({ error: "Missing Authentication header" }, 404);
  }

  const token = authHeader.split(" ")[1];
  if (!token) {
    return c.json({ error: "Missing Authentication token" }, 404);
  }

  try {
    const username = await verifyJwt(token);
    c.set("username", username);

    await next();
  } catch (err) {
    console.log("JWT verification has failed: ", err);
    return c.json({ error: "Authentication failed" }, 401);
  }
});

export default authmiddleware;
