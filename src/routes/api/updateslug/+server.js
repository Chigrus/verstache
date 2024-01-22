import { json } from '@sveltejs/kit';

export async function POST({ request, locals }) {
  const { id, slug } = await request.json();

  const { dbconn } = locals;

  const text = `UPDATE public.posts 
                SET slug = $1 
                WHERE id = $2`;

  const values = [slug, id];    
                                      
  const result = await dbconn.query(text, values); 

  return json(result);
}