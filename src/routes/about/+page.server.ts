import { Action, error } from '@sveltejs/kit';
import * as db from '$lib/server/db';
import * as token from '$lib/server/token';

let og_id = 2;
let post_id = 15;
 
export const load:Action= async ({ locals, cookies }) => {
  let og_data = await db.getOG(locals, og_id);
  let post = await db.getPost(locals, post_id);
  let user = await token.getUser(cookies);

  if(!post){
    throw error(404);
  }

  // if(!user.isAdmin && !post.publication){
  //   throw error(404);
  // }

  return {
    og_data, post, user,
  };
}