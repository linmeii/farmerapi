import { db } from "@/database";
import {
	type storageInsert,
	storageTable,
	type storage,
} from "@/database/schema/storage";
import { eq } from "drizzle-orm";

export abstract class storageService {
	static async get(name: storage["name"]): Promise<storage[]> {
		return await db
			.select()
			.from(storageTable)
			.where(eq(storageTable.name, name));
	}

	static async upsert(body: storageInsert): Promise<void> {
		await db
			.insert(storageTable)
			.values(body)
			.onDuplicateKeyUpdate({ set: { name: body.name, value: body.value } });
	}

	static async delete(name: storage["name"]): Promise<void> {
		await db.delete(storageTable).where(eq(storageTable.name, name));
	}
}
