import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { TourOfHeroesComponent } from './tourofheroes.component';

@NgModule({
  declarations: [
    TourOfHeroesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [
    TourOfHeroesComponent
  ]
})
export class TourOfHeroesModule { }
