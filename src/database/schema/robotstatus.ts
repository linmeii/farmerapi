import { bigint, boolean, mysqlTable } from "drizzle-orm/mysql-core";

export const robotStatusTable = mysqlTable("robot_status", {
	id: bigint("id", { mode: "number" }).primaryKey().autoincrement(),
	value: boolean("value").notNull(),
});

export type RobotStatus = typeof robotStatusTable.$inferSelect;
export type RobotStatusInsert = typeof robotStatusTable.$inferInsert;
