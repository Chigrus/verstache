import { json } from '@sveltejs/kit';
 
export async function POST({ request, locals }) {
  const { post, id } = await request.json();

  const { dbconn } = locals;

  const result = await dbconn.query(`UPDATE public.posts 
                                      SET post = $1 
                                      WHERE id = $2`, [JSON.stringify(post), id]);               

  return json(result);
}