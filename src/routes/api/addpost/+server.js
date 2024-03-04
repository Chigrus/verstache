import { json } from '@sveltejs/kit';

export async function POST({ request, locals }) {
  const { category, title, text, icon, post, slug, includefiles, og_id } = await request.json();

  const { dbconn } = locals;

  const text_query = `INSERT INTO posts 
                (category, title, text, icon, post, slug, includefiles, og_id)
                VALUES ($1, $2, $3, $4, $5, $6, $7, $8) 
                RETURNING *`;

  const values_query = [category, title, text, icon, JSON.stringify(post), slug, JSON.stringify(includefiles), og_id];    
                                      
  const result = await dbconn.query(text_query, values_query); 

  return json(result.rows[0]);
}