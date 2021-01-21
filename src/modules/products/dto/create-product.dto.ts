/**
 * Class DTO for product
 */

export class Product {
    readonly name: string;
    price: number;
    readonly description: string;
    calories: number;
    readonly type: number;
    readonly size: string;
    readonly weight: number;
    readonly img?: { uri: string; };
    readonly isFavorite: boolean;
    readonly sizes: [{ size: string, price: number, weight: number }];
    productOptions: string[];
}
