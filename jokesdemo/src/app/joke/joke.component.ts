import { Component, Input } from '@angular/core';
import { JokeData } from '../models/joke.data';


@Component({
    selector: 'app-jokeitem',
    templateUrl: './joke.component.html',
    styleUrls: ['./joke.component.css']
})
export class JokeComponent {
    @Input('joke')
    public joke: JokeData;
}
