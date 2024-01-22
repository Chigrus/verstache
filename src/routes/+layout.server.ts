import type { Action } from '@sveltejs/kit';
import * as db from '$lib/server/db';

 
export const load:Action= async ({ locals, cookies }) => {
  return {
    menu: await db.getMenu(locals),
  };
}