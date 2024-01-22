import { Action, error } from '@sveltejs/kit';
import * as db from '$lib/server/db';
import * as token from '$lib/server/token';
 
export const load:Action= async ({ locals, params, cookies }) => {
  let post = await db.getSinglePost(locals, params.slug);
  let user = await token.getUser(cookies);

  if(!post){
    throw error(404);
  }

  if(!user.isAdmin && !post.publication){
    throw error(404);
  }

  return {
    og_data: await db.getOG(locals, post.og_id),
    post,
    user,
  };
}
