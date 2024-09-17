import Elysia from "elysia";
import { Logestic } from "logestic";

export const middleware = new Elysia().use(Logestic.preset('fancy'))
