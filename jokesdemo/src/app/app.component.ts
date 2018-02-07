import { Component } from '@angular/core';
import { JokeData } from './models/joke.data';
import { CarouselComponent } from './reusables/carousel/carousel.component';
import { CarouselItemComponent } from './reusables/carousel/carousel-item/carouselItem.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  applicationTitle = 'Jokes Demo Application';
  joke: JokeData = new JokeData('Setup', 'Punch Line', 'The Story Line', true);

}

