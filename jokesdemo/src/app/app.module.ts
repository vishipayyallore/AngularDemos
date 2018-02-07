import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule, MatCheckboxModule, MatCardModule, MatMenuModule,
  MatInputModule, MatToolbarModule, MatIconModule, MatSidenavModule,
  MatSlideToggleModule,
  MatSnackBarModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { FooterComponent } from './reusables/footer/footer.component';
import { JokeListComponent } from './jokes/jokeslist/jokelist.component';
import { JokeComponent } from './jokes/joke/joke.component';
import { JokeFormComponent } from './jokes/jokeform/jokeform.component';
import { CarouselItemComponent } from './reusables/carousel/carousel-item/carouselItem.component';
import { CarouselComponent } from './reusables/carousel/carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    JokeComponent,
    JokeListComponent,
    JokeFormComponent,
    CarouselItemComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatToolbarModule,
    MatCardModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
