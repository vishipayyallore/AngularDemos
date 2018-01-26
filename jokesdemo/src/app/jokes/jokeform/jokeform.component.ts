import { Component, Output, EventEmitter } from '@angular/core';
import { JokeData } from '../../models/joke.data';

@Component({
    selector: 'app-jokeform',
    templateUrl: './jokeform.component.html',
    styleUrls: ['./jokeform.component.css']
})
export class JokeFormComponent {
    @Output() jokeCreated = new EventEmitter<JokeData>();

    createJoke() {
        this.jokeCreated.emit(new JokeData(
            'setup',
            'punch line',
            'story line'
        ));
    }
}

