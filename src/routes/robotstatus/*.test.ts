import { describe, expect, it } from "bun:test";
import Elysia from "elysia";
import { robotStatusController } from "./controller";

const app = new Elysia().use(robotStatusController);
const apipath = "http://localhost/robotstatus";

describe("robotstatus", () => {
	it("should upsert robot status with value true", async () => {
		const response = await app.handle(
			new Request(apipath, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ id: 1, value: true }),
			}),
		);
		expect(response.status).toBe(200);
	});

	it("should get robot status with value true", async () => {
		const response = await app.handle(new Request(apipath));
		expect(response.status).toBe(200);
		const body = await response.json();
		expect(body).toEqual([{ id: 1, value: true }]);
	});

	it("should upsert robot status with value false", async () => {
		const response = await app.handle(
			new Request(apipath, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ id: 1, value: false }),
			}),
		);
		expect(response.status).toBe(200);
	});

	it("should get robot status with value false", async () => {
		const response = await app.handle(new Request(apipath));
		expect(response.status).toBe(200);
		const body = await response.json();
		expect(body).toEqual([{ id: 1, value: false }]);
	});
});
