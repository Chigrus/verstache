import { writeFileSync } from 'fs';
import { json, error } from "@sveltejs/kit";

function getUrl(type:string, file:string, compare_type:string, resolution:string){
    const DATE_RE = /(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})/;
    const random = ("" + Math.random()).substring(2, 8);


    if (type !== compare_type) {
        return json({ error: true, message: 'Загружаемый файл не соответствует формату!' });
    }
    
    const fileName = new Date().toISOString().match(DATE_RE)!.slice(1).join('-') + '-' + random;
    const url = `/layoutuploads/images/${fileName}.${resolution}`;

    writeFileSync(`static/layoutuploads/images/${fileName}.${resolution}`, file, 'base64');

    return json({ url });
}

export async function POST({ request } : {request:any}) {
    if (!request.body) {
        throw error(400, new Error('Needs file body to upload'));
    }

    const { data } = await request.json();

    //console.log(data['type']);

    switch (data['resolution']) {
        case 'jpg':
            return getUrl(data['type'], data['file'], 'image/jpeg', data['resolution']);
          break;
        case 'png':
            return getUrl(data['type'], data['file'], 'image/png', data['resolution']);
          break;
        default:
            return json({ error: true, message: 'Загружаемый файл не соответствует формату!' });
    }
}