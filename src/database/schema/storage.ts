import { bigint, mysqlTable, text, varchar } from "drizzle-orm/mysql-core";

export const storageTable = mysqlTable("storage", {
	id: bigint("id", { mode: "number" }).primaryKey().autoincrement(),
	name: varchar("name", { length: 255 }).notNull().unique(),
	value: text("value").notNull(),
});

export type storage = typeof storageTable.$inferSelect;
export type storageInsert = typeof storageTable.$inferInsert;
