import authmiddleware from "@server/auth/authmiddleware";
import { Hono } from "hono";

const user = new Hono().basePath("/user");

user.use("/auth/*", authmiddleware);

user.post("/signup", (c) => c.text("signup user"));
user.post("/signin", (c) => c.text("signin user"));

user.delete("/auth/signout", (c) => c.text("log out user"));
user.delete("/auth/delete/:id", (c) => c.text("delete user"));

user.put("/auth/username", (c) => c.text("change username"));
user.put("/auth/password", (c) => c.text("change password"));

export default user;
