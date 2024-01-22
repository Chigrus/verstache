import { json } from '@sveltejs/kit';

export async function POST({ request, locals }) {
  const { title, 
          description, 
          og_type, 
          og_title, 
          og_description, 
          og_url, 
          og_image, 
          og_image_type, 
          og_image_width, 
          og_image_height, 
          og_article, 
          og_profile, 
          og_video } = await request.json();

  const { dbconn } = locals;

  const text = `INSERT INTO opengraph 
                (title, 
                 description, 
                 og_type, 
                 og_title, 
                 og_description, 
                 og_url, 
                 og_image, 
                 og_image_type, 
                 og_image_width, 
                 og_image_height, 
                 og_article, 
                 og_profile, 
                 og_video)
                VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13) 
                RETURNING id`;

  const values = [title, 
                  description, 
                  og_type, 
                  og_title, 
                  og_description, 
                  og_url, 
                  og_image, 
                  og_image_type, 
                  og_image_width, 
                  og_image_height, 
                  og_article, 
                  og_profile, 
                  og_video];    
                                      
  const result = await dbconn.query(text, values); 

  return json(result.rows[0].id);
}