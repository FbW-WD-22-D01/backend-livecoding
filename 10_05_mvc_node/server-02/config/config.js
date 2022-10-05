import { Low, JSONFile } from 'lowdb';

const adapter = new JSONFile("./config/db/db.json")
const db = new Low(adapter);

// Read data from JSON file, this will set db.data content

await db.read()


export default db;

