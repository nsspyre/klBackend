import { Product } from '../../products/dto/create-product.dto';

/**
 * DTO for User
 */

export class CreateOrderDto {
    readonly userId: string;
    quantity?: string;
    readonly createdAt?: string;
    readonly products?: string[];
    readonly location?: string;
    readonly total: string;
    readonly addressDescription?: string;
}
