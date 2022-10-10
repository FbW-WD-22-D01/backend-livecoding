import { join, dirname } from 'path'
import { Low, JSONFile } from 'lowdb'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url));

// Use JSON file for storage
const file = join(__dirname, '/db/' ,'db.json');
const adapter = new JSONFile(file);
const db = new Low(adapter);

// Read data from JSON file, this will set db.data content
await db.read();

// If file.json doesn't exist, db.data will be null
// Set default data
db.data ||= { products: [] }
// db.data = db.data || { posts: [] } // for node < v15.x



export default db;