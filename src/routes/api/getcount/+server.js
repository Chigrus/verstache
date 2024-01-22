import { json } from '@sveltejs/kit';
 
export async function POST({ request, locals }) {
  const { slug } = await request.json();

  const { dbconn } = locals;

  const text = `SELECT COUNT(*) as count 
              FROM public.posts 
              WHERE slug = $1`;

  const values = [slug];    
                                      
  const result = await dbconn.query(text, values);

  return json(result.rows[0].count);
}