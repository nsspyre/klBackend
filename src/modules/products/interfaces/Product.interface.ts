import { Document } from 'mongoose';

/**
 * Interface for Product
 */
export interface Ingredients {
    readonly name: string;
    readonly price: number;
    readonly calories: number;
}

export interface Option {
    readonly name: string;
    readonly ingredients: Ingredients[];
}

interface Size {
    size: string;
    price: number;
    weight: number;
}

export interface Product extends Document {
    readonly name: string;
    readonly price: number;
    readonly calories: number;
    readonly description: string;
    readonly type: number;
    readonly sizes: Size[];
    readonly options: Option[];
}
