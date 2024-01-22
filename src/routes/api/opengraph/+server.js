import { json } from '@sveltejs/kit';
 
export async function POST({ request, locals }) {
  const { dataOpenGraph } = await request.json();

  const { dbconn } = locals;
      
  const result = await dbconn.query(`UPDATE public.opengraph 
                                      SET title = $1, 
                                      description = $2,
                                      og_type = $3,
                                      og_title = $4,
                                      og_description = $5,
                                      og_url = $6,
                                      og_image = $7,
                                      og_article = $8, 
                                      og_profile = $9, 
                                      og_video = $10 
                                      WHERE id = $11`, [
                                        dataOpenGraph.title, 
                                        dataOpenGraph.description,
                                        dataOpenGraph.og_type,
                                        dataOpenGraph.og_title,
                                        dataOpenGraph.og_description, 
                                        dataOpenGraph.og_url,
                                        dataOpenGraph.og_image,
                                        JSON.stringify(dataOpenGraph.og_article), 
                                        JSON.stringify(dataOpenGraph.og_profile), 
                                        JSON.stringify(dataOpenGraph.og_video), 
                                        dataOpenGraph.og_id]
                                      );              

  return json(result);
}