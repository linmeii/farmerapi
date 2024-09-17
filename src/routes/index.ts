import Elysia from "elysia";
import { robotStatusController } from "./robotstatus/controller";

export const apiRoutes = new Elysia().use(robotStatusController);
