import { db } from "@/database";
import {
	type robotStatus,
	type robotStatusInsert,
	robotStatusTable,
} from "@/database/schema/robotstatus";
import { eq } from "drizzle-orm";

export abstract class robotStatusService {
	static async get(): Promise<robotStatus[]> {
		return await db
			.select()
			.from(robotStatusTable)
			.where(eq(robotStatusTable.id, 1));
	}

	static async upsert(body: robotStatusInsert): Promise<void> {
		await db
			.insert(robotStatusTable)
			.values(body)
			.onDuplicateKeyUpdate({ set: { value: body.value } });
	}
}
