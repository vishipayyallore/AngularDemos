import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule, MatCheckboxModule, MatCardModule, MatMenuModule,
  MatInputModule, MatToolbarModule, MatIconModule
} from '@angular/material';

import { TourOfHeroesComponent } from './heroeslist/tourofheroes.component';
import { HeroDetailComponent } from './herodetail/hero-detail.component';
import { HeroService } from './services/hero.service';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './services/message.service';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatToolbarModule,
    MatCardModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule
  ],
  declarations: [
    AppComponent,
    TourOfHeroesComponent,
    HeroDetailComponent,
    MessagesComponent
  ],
  providers: [HeroService, MessageService],
  bootstrap: [
    AppComponent
  ]
})
export class TourOfHeroesModule { }
