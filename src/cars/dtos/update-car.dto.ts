import { IsOptional, IsString, IsUUID, MinLength } from "class-validator";

export class UpdateCarDto{
    @IsString()
    @IsUUID() //es Id unico? 
    @IsOptional() //es opcional? 
    readonly id?: string;
    @IsString()
    @IsOptional()

   readonly brand?: string;
    @IsString()
    @IsOptional()
    // @MinLength(3) Establece que el modelo tiene que tener minimo 3 letras.
   readonly model?: string;
}