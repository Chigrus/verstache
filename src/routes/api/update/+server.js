import { json } from '@sveltejs/kit';

const VALID_FIELDS = ['title', 'text', 'publication'];
 
export async function POST({ request, locals }) {
  const { id, field, value } = await request.json();

  if (!VALID_FIELDS.includes(field)) {
    throw error(400, 'Invalid field value');
  }

  const { dbconn } = locals;

  const text = `UPDATE public.posts 
                SET ${field} = $1 
                WHERE id = $2`;

  const values = [value, id];    
                                      
  const result = await dbconn.query(text, values); 

  return json(result);
}