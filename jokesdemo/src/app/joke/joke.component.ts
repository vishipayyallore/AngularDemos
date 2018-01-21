import { Component, Input } from '@angular/core';
import { JokeData } from '../models/joke.data';


@Component({
    selector: 'app-jokeitem',
    templateUrl: './joke.component.html'
})
export class JokeComponent {
    @Input('joke')
    public joke: JokeData;
}
