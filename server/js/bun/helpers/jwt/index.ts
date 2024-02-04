import jwt from 'jsonwebtoken';

export async function createToken(data: string | object | Buffer): Promise<string>{
    return jwt.sign(data, "adsasasdas", {
        expiresIn: "7d",
    });
}

export async function decodeToken(token: string): Promise<any>{
    return jwt.decode(token);
}