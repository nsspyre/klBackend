import { Option } from './create-option.dto';
/**
 * Class DTO for product
 */

export class Product {
    readonly name: string;
    readonly price: number;
    readonly description: string;
    readonly calories: number;
    readonly type: number;
    readonly sizes: [{ size: string, price: number, weight: number }];
    readonly options: Option[];
}
