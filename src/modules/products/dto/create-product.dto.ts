/**
 * Class DTO for product
 */
interface Size {
    size: string;
    price: number;
}

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
    readonly sizes: Size[];
    productOptions: string[];
}
