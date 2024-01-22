import { json, type Action } from '@sveltejs/kit';
 
export const POST:Action = async ({ request, locals }) => {

  const { id, field, value } = await request.json();
  // @ts-ignore
  const { dbconn } = locals;

  const result = await dbconn.query(`UPDATE public.posts 
                                      SET ${field} = $1 
                                      WHERE id = $2`, [value, id]);               

  return json(result);
}