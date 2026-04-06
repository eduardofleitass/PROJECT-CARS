import { BadRequestException, Body, Controller, Delete, Get, Param, ParseIntPipe, ParseUUIDPipe, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import {v4 as uuid} from 'uuid';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dtos/create-car.dto';

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
        return createcarDto
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
