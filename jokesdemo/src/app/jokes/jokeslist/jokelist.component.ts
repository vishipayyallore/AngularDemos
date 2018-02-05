import { Component, ViewChild } from '@angular/core';

import { MatSnackBar } from '@angular/material';

import { JokeData } from '../../models/joke.data';
import { JokeComponent } from '../joke/joke.component';
import { AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
    selector: 'app-joke-list',
    templateUrl: './jokelist.component.html',
    styleUrls: ['./jokelist.component.css']
})
export class JokeListComponent implements AfterViewInit {
    @ViewChild(JokeComponent)
    jokeViewChild: JokeComponent;
    jokes: Array<JokeData> = [];

    constructor(public snackBar: MatSnackBar) {
        console.log(`new - jokeViewChild is ${this.jokeViewChild}`);

        this.jokes = [
            new JokeData('Joke 1', 'Punch for Joke 1', 'What did the cheese say when it looked in the mirror?'),
            new JokeData('Joke 2', 'Punch for Joke 2', 'What kind of cheese do you use to disguise a small horse?'),
            new JokeData('Joke 3', 'Punch for Joke 3', 'A kid threw a lump of cheddar at me')
        ];
    }

    addJoke(joke) {
        this.jokes.unshift(joke);
    }

    deleteJoke(joke) {
        const index = this.jokes.indexOf(joke);
        if (index !== -1) {
            this.jokes.splice(index, 1);
            this.snackBar.open('Joke Deleted!', 'Close', {
                duration: 2000,
            });
        }
    }

    ngAfterViewInit(): void {
        console.log(`ngAfterViewInit - jokeViewChild is ${this.jokeViewChild}`);
    }
}
