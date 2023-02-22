import { Injectable } from '@nestjs/common';
import { CARS_SEED } from './data/brand.seed';


@Injectable()
export class SeedService {
  populateDB() {
    return 'Seed executed success';
  }
  
}
