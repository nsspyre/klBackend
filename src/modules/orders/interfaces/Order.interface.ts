import { Document } from 'mongoose';
import { Product } from './Product.interface';

/**
 * Interface for Order
 */

export interface Order extends Document {
    readonly user_id: string;
    readonly quantity: string;
    readonly date: string;
    readonly products: Product[];
    readonly location: string;
    readonly total: string;
    readonly addressDescription: string;
}
