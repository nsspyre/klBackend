import { Document } from 'mongoose';

/**
 * Interface for ProductOptions
 */

export interface ProductOption extends Document {
    readonly name: string;
    readonly maxQuantity: number;
    readonly isSize: boolean;
    readonly options: string[];
}
