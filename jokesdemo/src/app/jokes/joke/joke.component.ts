import { Component, Input, Output, EventEmitter } from '@angular/core';
import { JokeData } from '../../models/joke.data';


@Component({
    selector: 'app-jokeitem',
    templateUrl: './joke.component.html',
    styleUrls: ['./joke.component.css']
})
export class JokeComponent {
    @Input('joke')
    public joke: JokeData;
    @Output()
    jokeDeleted = new EventEmitter<JokeData>();

    onJokeDeleted(joke: JokeData) {
        this.jokeDeleted.emit(joke);
    }

}
