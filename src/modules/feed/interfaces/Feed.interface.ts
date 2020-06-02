import { Document } from 'mongoose';
import { Product } from '../../products/interfaces/Product.interface';
import { Order } from '../../orders/interfaces/Order.interface';

/**
 * DTO for Feed
 */

export class Feed extends Document {
    readonly orders: Order[];
    readonly recommended: Product[];
}
