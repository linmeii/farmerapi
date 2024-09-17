import Elysia, { t } from "elysia";

export const storageModel = new Elysia({ name: "model.storage" }).model({
	"storage.get": t.Object({
		name: t.String(),
	}),
	"storage.upsert": t.Object({
		id: t.Number(),
		name: t.String(),
		value: t.String(),
	}),
	"storage.delete": t.Object({
		name: t.String(),
	}),
});
