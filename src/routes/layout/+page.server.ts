import type { Action } from '@sveltejs/kit';
import * as db from '$lib/server/db';
import * as token from '$lib/server/token';

type User = {
  isAdmin: boolean; 
  isEditor: boolean;
}

let cat_id:number = 1;
let og_id:number = 4;
 
export const load:Action= async ({ locals, cookies }) => {
  let user:User = await token.getUser(cookies);
  return {
    og_data: await db.getOG(locals, og_id),
    posts: await db.getPosts(locals, cat_id, user),
    user: await token.getUser(cookies),
  };
}


// import { fail } from '@sveltejs/kit';

// import { writeFileSync } from 'fs';
 
// export const actions = {
//   default: async ({ request } : {request:any}) => {
//     const formData = Object.fromEntries(await request.formData());

//     console.log(formData);


 
//     if ((formData.fileToUpload as File).type != 'image/jpeg') {
//       return fail(400, {
//         error: true,
//         message: 'You must provide a file to upload'
//       });
//     }

//     const { fileToUpload } = formData as { fileToUpload: File };

//     writeFileSync(`static/layout/${fileToUpload.name}`, Buffer.from(await fileToUpload.arrayBuffer()));

//     return {
//       success: true,
//       url: `/layout/${fileToUpload.name}`
//     };
 
//     // const { fileToUpload } = formData as { fileToUpload: File };
//   }
// };