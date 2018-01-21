import { Component } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material';
import { JokeComponent } from '../joke/joke.component';

@Component({
    selector: 'app-joke-list',
    templateUrl: './jokelist.component.html',
    styleUrls: ['./jokelist.component.css']
})
export class JokeListComponent {
    jokes: Array<JokeComponent>;

    constructor() {
        this.jokes = [
            new JokeComponent('Joke 1', 'Punch for Joke 1', 'What did the cheese say when it looked in the mirror?'),
            new JokeComponent('Joke 2', 'Punch for Joke 2', 'What kind of cheese do you use to disguise a small horse?'),
            new JokeComponent('Joke 3', 'Punch for Joke 3', 'A kid threw a lump of cheddar at me')
        ];
    }

}
