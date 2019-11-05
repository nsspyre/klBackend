import { Options } from './create-options.dto';

/**
 * DTO for Product
 */

export class ProductDto {
    readonly toppings: Options[];
    readonly flavor: Options[];
    readonly fruits: Options[];
    readonly price: number;
    readonly comments: string;
}
