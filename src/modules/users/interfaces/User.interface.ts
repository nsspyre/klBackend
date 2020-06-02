import { Document } from 'mongoose';

/**
 * Interface for User
 */

export interface User extends Document {
    readonly _id: string;
    readonly email: string;
    readonly age: number;
    readonly password: string;
    readonly salt: string;
    readonly token: string;
    readonly phone: string;
    readonly isPreferred: boolean;
    readonly username: string;
    readonly role: string;
    readonly address: string;
    readonly name: string;
    readonly lastname: string;
    readonly orders: any[];
}
