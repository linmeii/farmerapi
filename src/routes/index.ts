import Elysia from "elysia";
import { robotStatusController } from "./robotstatus/controller";
import { storageController } from "./storage/controller";

export const apiRoutes = new Elysia()
	.onError((error) => {
		console.log("An error occurred:", error);
	})
	.use(robotStatusController)
	.use(storageController);
