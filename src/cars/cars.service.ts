import { Injectable, NotFoundException } from '@nestjs/common';
import { error } from 'console';

@Injectable()
export class CarsService {
    public cars=[{
        id:1,
        brand:'Toyota',
        model:'Corolla'
    },
    {
        id:2,
        brand:'Honda',
        model:'Civic'
    },
    {   
        id:3,
        brand:'Mitsubishi',
        model:'Eclipse'
    }
    ]

    findAll(){
    return this.cars;
    }
    findOneById(id:number){
        const car = this.cars.find(car => car.id === id)
        if (!car)  throw new NotFoundException(`El carro con id '${id}' no fue encontrado`);
        return car;
        }
    }

