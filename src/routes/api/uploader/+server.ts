import { createWriteStream } from 'fs';
import * as path from 'path';
import { type RequestHandler, json, error } from "@sveltejs/kit";

const DATE_RE = /(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})/;

export const PUT: RequestHandler = async ({ request }) => {
    if (!request.body) {
        throw error(400, new Error('Needs file body to upload'));
    }

    const date = new Date().toISOString().match(DATE_RE)!.slice(1).join('-');
    const file = path.join(process.cwd(), 'static/uploads', `${date}.jpg`);
    const url = `/uploads/${date}.jpg`;

    const reader = request.body.getReader();
    const writer = createWriteStream(file);
    for (;;) {
        const {done, value: data} = await reader.read();
        if (done) break;
        writer.write(data);
    }
    writer.end();

    return json({ url });
};