import { Hono } from "hono";

const user = new Hono().basePath("/user");

user.post("/signup", (c) => c.text("signup user"));
user.post("/signin", (c) => c.text("signin user"));

user.delete("/signout", (c) => c.text("log out user"));
user.delete("/delete/:id", (c) => c.text("delete user"));

user.put("/forgetpassword/:email", (c) => c.text("forget user password"));
user.put("/username", (c) => c.text("change username"));
user.put("/password", (c) => c.text("change password"));

export default user;
