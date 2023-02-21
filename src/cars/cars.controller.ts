import { Controller, Get, Param } from '@nestjs/common';

@Controller('cars')
export class CarsController {
    private cars = ['Toyato', 'Honda', 'Jeep'];
    @Get()
    getAllCars() {
        return this.cars;
    }

    @Get(':id')
    getCarById(@Param('id') id: string) {
        console.log({id})
        return {
            id
        }
    }
}
