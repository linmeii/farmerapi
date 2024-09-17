import Elysia, { t } from "elysia";

export const robotStatusModel = new Elysia({ name: "model.robotstatus" }).model(
	{
		"robotstatus.upsert": t.Object({
			id: t.Number(),
			value: t.Boolean(),
		}),
	},
);
