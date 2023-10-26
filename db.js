import 'dotenv/config';
import postgres from 'postgres';

let { PGHOST, PGDATABASE, PGUSER, PGPASSWORD, ENDPOINT_ID } = process.env;

export const sql = postgres({
  host: PGHOST,
  database: PGDATABASE,
  username: PGUSER,
  password: PGPASSWORD,
  port: 5432,
  ssl: 'require',
  connection: {
    options: `project=${ENDPOINT_ID}`,
  },
});

// const { HOST, PORT, DATABASE, USER, PASSWORD } = process.env;
// const URL = `postgres://${USER}:${PASSWORD}@${HOST}:${PORT}/${DATABASE}?options=project%3D${ENDPOINT_ID}`;

// export const sql = postgres(URL, { ssl: 'require' });