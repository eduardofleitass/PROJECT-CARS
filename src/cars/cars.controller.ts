import { BadRequestException, Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {
    constructor(
        private readonly CarsService: CarsService
    ){}
    @Get()
    getAllcars(){
    return this.CarsService.findAll();
    }

    @Get(':id')
     getCarById(@Param('id', ParseIntPipe)id : number){
        console.log( { id } );
        return this.CarsService.findOneById(id);
        
     }

     @Post()
     createCar(@Body()body:any){
        return body
     }
     @Patch(':id')
     updateCar(
      @Param('id',ParseIntPipe) id:number,
      @Body()body:any)
      {
        return body;
     }
     @Delete(':id')
     deletCar(@Param ('id', ParseIntPipe )id:number){
        return{
            method:'delete',
            id
        }
     }

} 
