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

  constructor(private heroService: HeroService, private messageService: MessageService) {
  }

  ngOnInit() {
    this.getHeros();
  }

  getHeros(): void {
    this.heroService.getHeros()
      .subscribe((heroes) => {
        this.heroesList = heroes;
      });
  }

}
