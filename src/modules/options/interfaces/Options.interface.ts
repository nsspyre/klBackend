import { Document } from 'mongoose';

/**
 * Interface for Product
 */
export interface Options extends Document {
    readonly name: string;
    readonly price: number;
    readonly calories: number;
    readonly extraType?: string;
    readonly isExtra: boolean;
    readonly onStock: boolean;
}
