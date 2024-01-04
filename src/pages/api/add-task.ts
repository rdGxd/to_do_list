import { sql } from "@vercel/postgres";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  try {
    const taskName = request.query.taskName as string;
    const ownerName = request.query.ownerName as string;
    if (!taskName || !ownerName) {
      throw new Error("Task and owner names required");
    }
    await sql`INSERT INTO Tasks (Name, Owner) VALUES (${taskName}, ${ownerName})`;
  } catch (error) {
    return response.status(500).json({ error });
  }

  const task = await sql`SELECT * FROM Tasks;`;
  return response.status(200).json({ task });
}
