import Elysia from "elysia";
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
		body: "robotstatus.upsert",
		detail: { tags: ["robotstatus"] },
	});
