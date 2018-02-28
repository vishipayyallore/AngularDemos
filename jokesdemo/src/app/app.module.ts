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
import { JokesComponent } from './jokes/jokes.component';
import { AppRoutingModule } from './app-routing.module';
import { NgForDemoComponent } from './directivesdemo/ngfordemo/ngfordemo.component';
import { ArticlesComponent } from './articles/articles.component';
import { JokeOverDirective } from './customdirectives/jokehover.directive';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    JokeComponent,
    JokeListComponent,
    JokeFormComponent,
    CarouselItemComponent,
    CarouselComponent,
    JokesComponent,
    NgForDemoComponent,
    ArticlesComponent,
    JokeOverDirective
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
    MatSnackBarModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
