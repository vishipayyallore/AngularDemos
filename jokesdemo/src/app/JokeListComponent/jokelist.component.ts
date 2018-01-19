import { Component } from '@angular/core';
import {MatSlideToggleChange} from '@angular/material';

@Component({
    selector: 'app-joke-list',
    templateUrl: './jokelist.component.html',
    styleUrls: ['./jokelist.component.css']
})
export class JokeListComponent {
    jokes: Array<Object>;

    constructor() {
        this.jokes = [
            {
                setup: 'Joke 1',
                punchline: 'Punch for Joke 1',
                storyline: 'What did the cheese say when it looked in the mirror?',
                hide: true
            },
            {
                setup: 'Joke 2',
                punchline: 'Punch for Joke 2',
                storyline: 'What kind of cheese do you use to disguise a small horse?',
                hide: true
            },
            {
                setup: 'Joke 3',
                punchline: 'Punch for Joke 3',
                storyline: 'A kid threw a lump of cheddar at me',
                hide: true
            }
        ];

    }

  public showContent(event: MatSlideToggleChange, joke: any) {
    joke.hide = event.checked;
  }

}
