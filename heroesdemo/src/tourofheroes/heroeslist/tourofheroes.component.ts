import { Component, OnInit } from '@angular/core';

import { Hero } from '../models/Hero';
import { HeroService } from '../services/hero.service';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-heroesroot',
  templateUrl: './tourofheroes.component.html',
  styleUrls: ['./tourofheroes.component.css']
})
export class TourOfHeroesComponent implements OnInit {
  title = 'Tour of Heroes';
  heroesList: Hero[] = null;
  selectedHero: Hero;

  constructor(private heroService: HeroService, private messageService: MessageService) {
  }

  ngOnInit() {
    this.getHeros();
  }

  onSelect(hero: Hero): void {
    const number1 = 10;
    const number2 = 10;
    const output = `Number1: ${number1} Number2: ${number2}`;

    this.selectedHero = hero;
    this.messageService.add('Selected Hero: ' + hero.name);
  }

  getHeros(): void {
    this.heroService.getHeros()
      .subscribe((heroes) => {
        this.heroesList = heroes;
        if (this.heroesList) {
          this.onSelect(this.heroesList[0]);
        }
      });
  }

}
