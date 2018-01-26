import { Component } from '@angular/core';
import { JokeData } from '../../models/joke.data';

@Component({
    selector: 'app-joke-list',
    templateUrl: './jokelist.component.html',
    styleUrls: ['./jokelist.component.css']
})
export class JokeListComponent {
    jokes: Array<JokeData>;

    constructor() {
        this.jokes = [
            new JokeData('Joke 1', 'Punch for Joke 1', 'What did the cheese say when it looked in the mirror?'),
            new JokeData('Joke 2', 'Punch for Joke 2', 'What kind of cheese do you use to disguise a small horse?'),
            new JokeData('Joke 3', 'Punch for Joke 3', 'A kid threw a lump of cheddar at me')
        ];
    }

    addJoke(joke) {
        this.jokes.unshift(joke);
    }

}
