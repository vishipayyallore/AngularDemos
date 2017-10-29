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
  heroes = HEROES;

  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };

}
