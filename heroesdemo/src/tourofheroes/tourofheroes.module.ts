import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { } from '@angular/material';

import { TourOfHeroesComponent } from './tourofheroes.component';

@NgModule({
  declarations: [
    TourOfHeroesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [
    TourOfHeroesComponent
  ]
})
export class TourOfHeroesModule { }
