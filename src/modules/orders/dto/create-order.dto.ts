import { Product } from '../../products/dto/create-product.dto';

/**
 * DTO for User
 */

export class CreateOrderDto {
    readonly userId: string;
    readonly quantity: string;
    readonly date: string;
    readonly products: Product[];
    readonly location: string;
    readonly total: string;
    readonly addressDescription: string;
}
