import { Elysia } from "elysia";
import { middleware } from "./middleware";

export const app = new Elysia().use(middleware).get("/", () => "Hello from Elysia 🦊");
