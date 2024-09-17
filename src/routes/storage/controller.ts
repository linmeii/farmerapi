import Elysia, { t } from "elysia";
import { storageService } from "./service";
import { storageModel } from "./model";

export const storageController = new Elysia({
	prefix: "/storage",
})
	.use(storageModel)
	.get("/:name", async ({ params }) => storageService.get(params.name), {
		params: t.Object({
			name: t.String(),
		}),
		detail: { tags: ["storage"] },
	})
	.post("/", async ({ body }) => storageService.upsert(body), {
		body: t.Object({
			id: t.Number(),
			name: t.String(),
			value: t.String(),
		}),
		detail: { tags: ["storage"] },
	})
	.delete("/", async ({ body }) => storageService.delete(body.name), {
		body: t.Object({
			name: t.String(),
		}),
		detail: { tags: ["storage"] },
	});
