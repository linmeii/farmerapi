import { Elysia } from "elysia";
import { middleware } from "./middleware";
import { env } from "./config/env";

export const app = new Elysia()
	.use(middleware)
	.get("/", () => "Hello from Elysia 🦊")
	.listen(env.SERVER_PORT);
