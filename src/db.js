import fs from "node:fs/promises";
const DB_PATH = new URL("../db.json", import.meta.url).pathname;

export const getDB = async () => {
  const dbData = await fs.readFile(DB_PATH, "utf-8");
  return JSON.parse(dbData);
};

export const saveDB = async (saveData) => {
  await fs.writeFile(DB_PATH, JSON.stringify(saveData, null, 2));
  return dbData;
};

export const insertDB = async (newData) => {
  const dbData = await getDB();
  dbData.notes.push(newData);
  await saveDB(dbData);
  return newData;
};
