import { Component } from '@angular/core';

import { JokeData } from '../models/joke.data';

@Component({
    selector: 'app-jokes',
    templateUrl: './jokes.component.html'
})
export class JokesComponent {
    joke: JokeData = new JokeData('Setup', 'Punch Line', 'The Story Line', true);
}
