import { unlinkSync } from 'fs';
import { type Action, json,  error } from "@sveltejs/kit";


export const POST:Action = async ({ request }) => {
    if (!request.body) {
        throw error(400, new Error('Needs url to remove file'));
    }

    const { url } = await request.json();

    try{
        unlinkSync(`static/${url}`);
        return json({ url });
    } 
    catch (err) {
        return json({ err });
    }

}