import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Rx';
import { of } from 'rxjs/observable/of';

import { Hero } from '../models/Hero';
import { HEROES } from '../data/Heroes';
import { MessageService } from './message.service';

@Injectable()
export class HeroService {

    constructor(private messageService: MessageService) {
    }

    public getHeros(): Observable<Hero[]> {
        this.messageService.add('HeroService: fetched heroes');
        return of(HEROES);
    }

    public getHero(id: number): Observable<Hero> {
        this.messageService.add(`HeroService: fetched hero id=${id}`);
        return of(HEROES.find( hero => hero.id === id));
    }
}
