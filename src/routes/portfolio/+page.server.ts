import type { Action } from '@sveltejs/kit';
import * as db from '$lib/server/db';
import * as token from '$lib/server/token';

type User = {
  isAdmin: boolean; 
  isEditor: boolean;
}

let og_id:number = 3;
 
export const load:Action= async ({ locals, cookies }) => {
  return {
    og_data: await db.getOG(locals, og_id),
    user: await token.getUser(cookies),
  };
}