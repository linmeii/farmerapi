import cors from "@elysiajs/cors";
import staticPlugin from "@elysiajs/static";
import swagger from "@elysiajs/swagger";
import Elysia from "elysia";
import { Logestic } from "logestic";

export const middleware = new Elysia()
	.use(Logestic.preset("fancy"))
	.use(
		swagger({
			documentation: {
				tags: [
					{ name: "robotstatus", description: "Robot status operations" },
					{ name: "storage", description: "Storage operations" },
				],
			},
		}),
	)
	.use(
		staticPlugin({
			assets: "public",
			prefix: "/",
		}),
	)
	.use(cors());
