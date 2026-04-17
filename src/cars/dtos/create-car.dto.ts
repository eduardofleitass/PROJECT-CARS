import { IsString, MinLength } from "class-validator";

export class CreateCarDto{
    @IsString()
   readonly brand!: string;
    @IsString()
    // @MinLength(3) Establece que el modelo tiene que tener minimo 3 letras.
   readonly model!: string;
}