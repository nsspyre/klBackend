/**
 * DTO for User
 */

export class CreateUserDto {
    readonly email: string;
    readonly age: number;
    password: string;
    readonly salt: string;
    readonly token: string;
    readonly phone: string;
    readonly isPreferred: boolean;
    readonly username: string;
    readonly role: string;
    readonly address: string;
}
