import { BadRequestException, Body, Controller, Delete, Get, Param, ParseIntPipe, ParseUUIDPipe, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import {v4 as uuid} from 'uuid';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dtos/create-car.dto';
import { UpdateCarDto } from './dtos/update-car.dto';

@Controller('cars')
// @UsePipes (ValidationPipe)
export class CarsController {
    constructor(
        private readonly CarsService: CarsService
    ){}
    @Get()
    getAllcars(){
    return this.CarsService.findAll();
    }

    @Get(':id')
     getCarById(@Param('id' , new ParseUUIDPipe({version: '4'}))id : string){
        console.log( { id } );
        return this.CarsService.findOneById(id);
        
     }

     @Post()
     createCar(@Body()createcarDto: CreateCarDto){
        return this.CarsService.create(createcarDto)
     }
     @Patch(':id')
     updateCar(
      @Param('id',ParseUUIDPipe) id:string,
      @Body()updateCarDto: UpdateCarDto )
      {
        return this.CarsService.update(id,updateCarDto); // Para actualizar el listado de los carros
     }
     @Delete(':id')
     deletCar(@Param ('id', ParseUUIDPipe )id:string){
        return this.CarsService.delete(id);
     }

} 
