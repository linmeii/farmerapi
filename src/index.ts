import { Elysia } from "elysia";
import { env } from "./config/env";
import { apiRoutes } from "./routes";

export const app = new Elysia().use(apiRoutes).listen(env.SERVER_PORT);

console.log(
	`🚜 Farmer API is running at ${app.server?.hostname}:${app.server?.port}`,
);
