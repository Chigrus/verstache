import jwt from 'jsonwebtoken';
import crypto from 'crypto';
import type {JwtPayload} from 'jsonwebtoken';

export function jwtSign(payload: string | object | Buffer) {
    return new Promise<string>((resolve, reject) => {
        jwt.sign(payload, process.env['JWT']!, {
            expiresIn: 3600 * 60,
        }, (err, token) => {
            if (err) {
                return reject(err);
            }
            resolve(token!);
        });
    });
}

export function jwtVerify(token:string) {
    return new Promise<JwtPayload>((resolve, reject) => {
        jwt.verify(token, process.env['JWT']!, (err, payload) => {
            if (err) {
                return reject(err);
            }
            resolve(payload as JwtPayload);
        });
    });
}

export function sha256(input:string) {
    const { createHash } = crypto;
    const hash = createHash('sha256');
    const promise = new Promise<string>((resolve, reject) => {
        let output = '';
        hash.on('data', chunk => {
            output += Buffer.from(chunk).toString('hex');
        });
        hash.once('error', err => {
            reject(err);
            hash.removeAllListeners('data');
            hash.removeAllListeners('end');
        });
        hash.once('end', () => {
            resolve(output);
            hash.removeAllListeners('data');
            hash.removeAllListeners('error');
        });
    });
    hash.write(input);
    hash.end();
    return promise;
}
