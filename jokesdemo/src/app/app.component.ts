import { Component } from '@angular/core';
import { JokeData } from './models/joke.data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  applicationTitle = 'Jokes Demo Application';
  joke: JokeData = new JokeData('Setup', 'Punch Line', 'The Story Line', true);

}

