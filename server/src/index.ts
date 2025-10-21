import { Hono } from "hono";
import { cors } from "hono/cors";

export const app = new Hono()

.use(cors())

.get("/", (c) => {
	return c.text("Hello Hono!");
})


export default app;
