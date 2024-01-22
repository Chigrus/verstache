import { json } from '@sveltejs/kit';
 
export async function POST({ request, locals }) {
  const { id, url, field } = await request.json();

  const { dbconn } = locals;

  const result = await dbconn.query(`UPDATE public.posts 
                                      SET ${field} = $1 
                                      WHERE id = $2`, [url, id]);               

  return json(result);
}