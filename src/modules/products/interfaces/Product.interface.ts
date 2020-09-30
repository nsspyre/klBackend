import { Document } from 'mongoose';

/**
 * Interface for Product
 */
export interface Options {
    readonly name: string;
    readonly price: number;
    readonly calories: number;
    readonly extraType: string;
    readonly isExtra: boolean;
    readonly onStock: boolean;
}

export interface ProductOption {
    readonly name: string;
    readonly maxQuantity: number;
    readonly isSize: boolean;
    readonly options: Options[];
}

interface Size {
    size: string;
    price: number;
    weight: number;
}

interface Img {
    uri: string;
}

export interface Product extends Document {
    readonly name: string;
    readonly price: number;
    readonly calories: number;
    readonly description: string;
    readonly type: number;
    readonly size: string;
    readonly weight: number;
    readonly sizes: Size[];
    readonly img: Img;
    readonly isFavorite: boolean;
    readonly productOptions: ProductOption[];
}
