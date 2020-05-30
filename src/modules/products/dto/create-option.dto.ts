import { Ingredient } from './create-ingredient.dto';
/**
 * Class DTO for product option
 */

export class Option {
    readonly name: string;
    readonly ingredients: Ingredient[];
}
