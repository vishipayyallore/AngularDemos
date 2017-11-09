import { Injectable } from '@angular/core';

import { Hero } from '../models/Hero';
import { HEROES } from '../data/Heroes';

@Injectable()
export class HeroService {

    constructor() {
    }

    public getHeros(): Hero[] {
        return HEROES;
    }

}
