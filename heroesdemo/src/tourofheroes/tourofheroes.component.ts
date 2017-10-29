import { Component } from '@angular/core';

import { Hero } from './models/Hero';
import { HEROES } from './models/Heroes';

@Component({
  selector: 'app-heroesroot',
  templateUrl: './tourofheroes.component.html',
  styleUrls: ['./tourofheroes.component.css']
})
export class TourOfHeroesComponent {
  title = 'Tour of Heroes';
  heroesList = HEROES;
  selectedHero: Hero;

  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };

  onSelect(hero: Hero): void{
    this.selectedHero = hero;
  }

}
