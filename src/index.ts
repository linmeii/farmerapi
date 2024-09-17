import { Elysia } from "elysia";
import { middleware } from "./middleware";

export const app = new Elysia()
	.use(middleware)
	.get("/", () => "Hello from Elysia 🦊")
	.listen(process.env.PORT ?? 3000);
