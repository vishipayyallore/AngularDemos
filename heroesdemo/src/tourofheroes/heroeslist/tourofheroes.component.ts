import { Component, OnInit } from '@angular/core';

import { Hero } from '../models/Hero';
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'app-heroesroot',
  templateUrl: './tourofheroes.component.html',
  styleUrls: ['./tourofheroes.component.css']
})
export class TourOfHeroesComponent implements OnInit {
  title = 'Tour of Heroes';
  heroesList: Hero[] = null;
  selectedHero: Hero;

  constructor(private heroService: HeroService) {
  }

  ngOnInit() {
    this.getHeros();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeros(): void {
    this.heroService.getHeros()
      .subscribe((heroes) => {
        this.heroesList = heroes;
      });
  }

}
