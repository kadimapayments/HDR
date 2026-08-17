import { sql } from "@vercel/postgres";

export type SubmissionRow = {
  id: number;
  form_type: string;
  payload: Record<string, unknown>;
  created_at: string;
};

let tableReady: Promise<unknown> | null = null;

function ensureSubmissionsTable() {
  if (!tableReady) {
    tableReady = sql`
      CREATE TABLE IF NOT EXISTS submissions (
        id SERIAL PRIMARY KEY,
        form_type TEXT NOT NULL,
        payload JSONB NOT NULL,
        created_at TIMESTAMPTZ NOT NULL DEFAULT now()
      );
    `;
  }
  return tableReady;
}

export async function saveSubmission(formType: string, payload: Record<string, unknown>): Promise<void> {
  await ensureSubmissionsTable();
  await sql`
    INSERT INTO submissions (form_type, payload)
    VALUES (${formType}, ${JSON.stringify(payload)}::jsonb);
  `;
}

export async function listSubmissions(limit = 200): Promise<SubmissionRow[]> {
  await ensureSubmissionsTable();
  const { rows } = await sql<SubmissionRow>`
    SELECT id, form_type, payload, created_at
    FROM submissions
    ORDER BY created_at DESC
    LIMIT ${limit};
  `;
  return rows;
}
