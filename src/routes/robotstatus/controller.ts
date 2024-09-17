import Elysia, { t } from "elysia";
import { robotStatusService } from "./service";
import { robotStatusModel } from "./model";

export const robotStatusController = new Elysia({
	prefix: "/robotstatus",
})
	.use(robotStatusModel)
	.get("/", async () => robotStatusService.get(), {
		detail: { tags: ["robotstatus"] },
	})
	.post("/", async ({ body }) => robotStatusService.upsert(body), {
		body: t.Object({
			id: t.Number(),
			value: t.Boolean(),
		}),
		detail: { tags: ["robotstatus"] },
	});
