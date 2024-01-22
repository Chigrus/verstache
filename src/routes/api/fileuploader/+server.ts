import { writeFileSync } from 'fs';

import { type RequestHandler, json, error } from "@sveltejs/kit";

const DATE_RE = /(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})/;

function getUrl(type:string, file:string, compare_type:string, resolution:string){
    if (type !== compare_type) {
        return json({ error: true, message: 'Загружаемый файл не соответствует формату!' });
    }
    
    const fileName = new Date().toISOString().match(DATE_RE)!.slice(1).join('-');
    const url = `/layout/${resolution}/${fileName}.${resolution}`;

    writeFileSync(`static/layout/${resolution}/${fileName}.${resolution}`, file, 'base64');

    return json({ url });
}

export async function POST({ request } : {request:any}) {
    if (!request.body) {
        throw error(400, new Error('Needs file body to upload'));
    }

    const { data } = await request.json();

    //console.log(data['type']);

    switch (data['resolution']) {
        case 'svg':
            return getUrl(data['type'], data['file'], 'image/svg+xml', data['resolution']);
          break;
        case 'css':
            return getUrl(data['type'], data['file'], 'text/css', data['resolution']);
          break;
        default:
            return json({ error: true, message: 'Загружаемый файл не соответствует формату!' });
    }
}