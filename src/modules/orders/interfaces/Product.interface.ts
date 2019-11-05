import { Document } from 'mongoose';

/**
 * Interface for Product
 */

export interface Options  {
    readonly name: string;
    readonly price: number;
}

export interface Product extends Document {
    readonly toppings: Options[];
    readonly flavor: Options[];
    readonly fruits: Options[];
    readonly price: number;
    readonly comments: string;
}
