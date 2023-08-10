import fs from "node:fs/promises";
const DB_PATH = new URL("../db.json", import.meta.url).pathname;

export const getDB = async () => {
  const dbData = await fs.readFile(DB_PATH, "utf-8");
  return JSON.parse(dbData);
};
