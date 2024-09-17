import Elysia from "elysia";
import { robotStatusService } from "./service";
import { robotStatusModel } from "./model";

export const robotStatusController = new Elysia({
	prefix: "/robotstatus",
})
	.use(robotStatusModel)
	.get("/", async () => robotStatusService.get())
	.post("/", async ({ body }) => robotStatusService.upsert(body), {
		body: "robotstatus.upsert",
	});
