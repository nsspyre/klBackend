import { ProductDto } from './create-product.dto';

/**
 * DTO for User
 */

export class CreateOrderDto {
    // tslint:disable-next-line:variable-name
    readonly user_id: string;
    readonly quantity: string;
    readonly date: string;
    readonly products: ProductDto[];
    readonly location: string;
    readonly total: string;
    readonly addressDescription: string;
}
