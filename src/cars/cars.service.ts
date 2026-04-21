import { Injectable, NotFoundException } from '@nestjs/common';
import { error } from 'console';
import {v4 as uuid} from 'uuid';
import { Car } from './interfaces/cars.interfaces';
import { CreateCarDto , UpdateCarDto } from './dtos';
import { UUID } from 'crypto';

@Injectable()
export class CarsService {
    public cars: Car[]=[{
        id: uuid(),
        brand:'Toyota',
        model:'Corolla'
    },
    {
        id: uuid(),
        brand:'Honda',
        model:'Civic'
    },
    {   
        id: uuid(),
        brand:'Mitsubishi',
        model:'Eclipse'
    }
    ]

    findAll(){
    return this.cars;
    }
    findOneById(id:string){
        const car = this.cars.find(car => car.id === id)
        if (!car)  throw new NotFoundException(`El carro con id '${id}' no fue encontrado`);
        return car;
        }

    create(CreateCarDto:CreateCarDto){
        const car: Car={ 
            id: uuid (), //se genera id unico
           ...CreateCarDto //esto sirve para traer directamente todas las propiedades de CreateCarDto
        }
        this.cars.push(car);//esto seria para agregar el auto que coloquemos en nuestro endpoint cars de postman 
        return car;
    }
    update(id: string , updateCarDto : UpdateCarDto){
        
        let carDB = this.findOneById (id); //condición para modificar los carros
        
       this.cars = this.cars.map(car =>{
        if (car.id===id){
            carDB={...carDB,...updateCarDto,id} //sobrescribir datos , no va sobrescribir el uuid
            return carDB; 
        }
        return car; 
       });
        
        return carDB; //carro actualizado
    }
    }

