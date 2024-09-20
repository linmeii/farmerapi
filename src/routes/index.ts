import Elysia from "elysia";
import { robotStatusController } from "./robotstatus/controller";
import { storageController } from "./storage/controller";
import { Logestic } from "logestic";
import { middleware } from "@/middleware";

export const apiRoutes = new Elysia()
	.use(middleware)
	.onError(({ error, logestic }) => {
		logestic.error(error.message);
		return error.message;
	})
	.use(robotStatusController)
	.use(storageController);
