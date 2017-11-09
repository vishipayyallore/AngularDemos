import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Rx';
import { of } from 'rxjs/observable/of';

import { Hero } from '../models/Hero';
import { HEROES } from '../data/Heroes';

@Injectable()
export class HeroService {

    constructor() {
    }

    public getHeros(): Observable<Hero[]> {
        return of(HEROES);
    }

}
