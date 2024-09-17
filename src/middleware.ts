import cors from "@elysiajs/cors";
import staticPlugin from "@elysiajs/static";
import swagger from "@elysiajs/swagger";
import Elysia from "elysia";
import { Logestic } from "logestic";

export const middleware = new Elysia()
	.use(Logestic.preset("fancy"))
	.use(
		staticPlugin({
			assets: "public",
			prefix: "/",
		}),
	)
	.use(
		swagger({
			documentation: {
				info: { title: "Farmer API", version: "1.0.0" },
				tags: [{ name: "robotstatus", description: "Robot status operations" }],
			},
		}),
	)
	.use(cors());
