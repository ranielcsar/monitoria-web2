import { DatabaseSync } from 'node:sqlite';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';

const database = new DatabaseSync('db/data.db')

try {
  const scriptPath = join(process.cwd(), './db/db.sql');
  const sqlScript = readFileSync(scriptPath, 'utf8');

  database.exec(sqlScript);
  console.log('SQL script executed successfully!');
} catch (error) {
  console.error('Error executing SQL script:', error);
}

export { database }