import { IsString, MinLength } from "class-validator";


export class CreateCarDto {
    @IsString({message: `El campo no esta en la base de datos`})
    readonly brand: string;
    @IsString()  // tiene que ser un string
    @MinLength(3) // tiene que tener al menos tres letras
    readonly model: string
}