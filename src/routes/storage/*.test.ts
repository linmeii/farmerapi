import { describe, expect, it } from "bun:test";
import Elysia from "elysia";
import { storageController } from "./controller";

const app = new Elysia().use(storageController);
const apipath = "http://localhost/storage";

describe("storage", () => {
	it("should upsert a new object", async () => {
		const response = await app.handle(
			new Request(apipath, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ id: 1, name: "testname", value: "testvalue" }),
			}),
		);
		expect(response.status).toBe(200);
	});

	it("should get the upserted object", async () => {
		const response = await app.handle(new Request(`${apipath}/testname`));
		expect(response.status).toBe(200);
		const body = await response.json();
		expect(body).toEqual([{ id: 1, name: "testname", value: "testvalue" }]);
	});

	it("should upsert the object with updated data", async () => {
		const response = await app.handle(
			new Request(apipath, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					id: 1,
					name: "updatedname",
					value: "updatedvalue",
				}),
			}),
		);
		expect(response.status).toBe(200);
	});

	it("should get the upserted object with updated data", async () => {
		const response = await app.handle(new Request(`${apipath}/updatedname`));
		expect(response.status).toBe(200);
		const body = await response.json();
		expect(body).toEqual([
			{ id: 1, name: "updatedname", value: "updatedvalue" },
		]);
	});

	it("should delete the object", async () => {
		const response = await app.handle(
			new Request(apipath, {
				method: "DELETE",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ name: "updatedname" }),
			}),
		);
		expect(response.status).toBe(200);
	});

	it("should not find the object", async () => {
		const response = await app.handle(new Request(`${apipath}/updatedname`));
		expect(response.status).toBe(200);
		const body = await response.json();
		expect(body).toEqual([]);
	});
});
