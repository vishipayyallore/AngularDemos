import { Component } from '@angular/core';


@Component({
    selector: 'app-jokeitem',
    templateUrl: './joke.component.html'
})
export class JokeComponent {
    message: string;
    setup: string;
    punchLine: string;

    constructor() {
        this.message = 'Joke Component';

        this.setup = 'This is the Joke Component! Got initialized from constructor.';
        this.punchLine = 'This is Punch Line.';
    }

}
