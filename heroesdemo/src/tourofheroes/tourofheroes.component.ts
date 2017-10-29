import { Component } from '@angular/core';

import { Hero } from './models/Hero';

@Component({
  selector: 'app-heroesroot',
  templateUrl: './tourofheroes.component.html',
  styleUrls: ['./tourofheroes.component.css']
})

export class TourOfHeroesComponent {
  title = 'Tour of Heroes';

  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };

}
