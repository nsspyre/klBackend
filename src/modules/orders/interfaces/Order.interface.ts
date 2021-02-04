import { Document } from 'mongoose';
import { Product } from '../../products/interfaces/Product.interface';

/**
 * Interface for Order
 */

export interface Order extends Document {
    readonly userId: string;
    readonly quantity: string;
    readonly date: string;
    readonly products?: Product[];
    readonly location: string;
    readonly total: string;
    readonly addressDescription: string;
}

interface ProductOptions {
    id: string;
    options: string[];
}

interface Products {
    id: string;
    productOptions: ProductOptions[];
}

export interface OrderPayload {
    readonly userId: string;
    readonly location?: string;
    readonly total?: string;
    readonly addressDescription?: string;
    readonly products: Products[];
}
