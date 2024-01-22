import type { Action } from '@sveltejs/kit';
import * as db from '$lib/server/db';
import * as token from '$lib/server/token';

type User = {
  isAdmin: boolean; 
  isEditor: boolean;
}

let og_id:number = 5;
let notices_id:number = 2;
let cat_id:number = 1;
let status:number = 1;
 
export const load:Action= async ({ locals, cookies }) => {
  let user:User = await token.getUser(cookies);
  return {
    og_data: await db.getOG(locals, og_id),
    notices: await db.getPosts(locals, notices_id, user),
    news: await db.getPosts(locals, cat_id, user),
    administration: await db.getAdministration(locals, status),
    user: await token.getUser(cookies),
  };
}
