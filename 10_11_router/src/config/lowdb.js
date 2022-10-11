import {dirname, join} from 'path'

import {fileURLToPath} from 'url';
import {Low, JSONFile} from 'lowdb';

// Der URL Pfad meiner Datei
const url = import.meta.url;
// Umgewandelt von URL zu Pfad
const path = fileURLToPath(url);
const folderOfThisDocument = dirname(path);

const jsonFile = join(folderOfThisDocument, "/db", "/db.json")

// Get JSON file to use as an adapter
const adapter = new JSONFile(jsonFile);
console.log(adapter);
// Init lowdb with a JSONFile
const db = new Low(adapter)
// Make data from JSONFile accesible over db.data
await db.read();

export {db};