import { createClient, sql } from '@vercel/postgres';
import { unstable_noStore as noStore } from 'next/cache';

export async function connectToDB() {
  const client = createClient();
  await client.connect();

  try {
    if (client) {
      console.log('connected to database');
      return client;
    }
  } catch (error) {
    console.error('error connecting to database', error);
  }
}

export async function getPosts() {
  noStore();
  // await new Promise((resolve) => setTimeout(resolve, 3000));
  try {
    const data = await sql`SELECT * FROM posts`;
    // console.log(data.rows);
    return data.rows;
  } catch (error) {
    console.error('error getting posts');
  }
}