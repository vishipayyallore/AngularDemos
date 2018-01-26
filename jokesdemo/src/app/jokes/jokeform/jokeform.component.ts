import { Component, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { JokeData } from '../../models/joke.data';
import { MatSlideToggle } from '@angular/material';

@Component({
    selector: 'app-jokeform',
    templateUrl: './jokeform.component.html',
    styleUrls: ['./jokeform.component.css']
})
export class JokeFormComponent {
    @Output() jokeCreated = new EventEmitter<JokeData>();
    @ViewChild('setup') setup: ElementRef;
    @ViewChild('punchline') punchline: ElementRef;
    @ViewChild('storyline') storyline: ElementRef;
    @ViewChild('hide') hide: MatSlideToggle;

    createJoke(setup: string, punchline: string, storyline: string, hide: boolean) {
        this.jokeCreated.emit(new JokeData(setup, punchline, storyline, hide));
    }

    clearForm() {
        this.setup.nativeElement.value = '';
        this.punchline.nativeElement.value = '';
        this.storyline.nativeElement.value = '';
        this.hide.checked = false;
    }

}

