import { CreateOrderDto as Order } from '../../orders/dto/create-order.dto';
import { Product } from '../../products/dto/create-product.dto';
/**
 * DTO for Feed
 */

export class CreateFeedDto {
    readonly orders: Order[];
    readonly recommended: Product[];
}
