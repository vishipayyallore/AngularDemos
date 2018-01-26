import { Component, Output, EventEmitter } from '@angular/core';
import { JokeData } from '../../models/joke.data';

@Component({
    selector: 'app-jokeform',
    templateUrl: './jokeform.component.html',
    styleUrls: ['./jokeform.component.css']
})
export class JokeFormComponent {
    @Output() jokeCreated = new EventEmitter<JokeData>();

    createJoke(setup: string, punchline: string, storyline: string) {
        this.jokeCreated.emit(new JokeData(setup, punchline, storyline));
    }
}

