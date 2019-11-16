import * as bcrypt from 'bcrypt';

export async function encriptPassword(password: string): Promise<string> {
    const saltRounds = 10;

    const encrypted = await bcrypt.hash(password, saltRounds);

    return encrypted;
}

export async function checkUserPassword(
    commingPass: string,
    password: string,
): Promise<boolean> {
    return await bcrypt.compare(commingPass, password);
}
