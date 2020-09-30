import { Options } from './create-options.dto';
/**
 * Class DTO for product option
 */

export class ProductOptions {
    readonly name: string;
    readonly maxQuantity: number;
    readonly isSize: boolean;
    readonly options: Options[];
}
