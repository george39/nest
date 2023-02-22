import { IsOptional, IsString } from "class-validator";



export class UpdateCarDto {
    @IsString()
    @IsString()
    @IsOptional()
    readonly id?: string
    
    @IsString()
    @IsOptional()
    readonly brand?: string;
    
    @IsString() 
    @IsOptional()
    readonly model?: string
}