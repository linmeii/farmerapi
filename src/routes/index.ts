import Elysia from "elysia";
import { robotStatusController } from "./robotstatus/controller";
import { storageController } from "./storage/controller";

export const apiRoutes = new Elysia()
	.use(robotStatusController)
	.use(storageController);
