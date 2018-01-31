import { Component, Output, EventEmitter, ViewChild, ElementRef, ViewEncapsulation } from '@angular/core';
import { JokeData } from '../../models/joke.data';
import { MatSlideToggle, MatSnackBar } from '@angular/material';

@Component({
    selector: 'app-jokeform',
    templateUrl: './jokeform.component.html',
    styleUrls: ['./jokeform.component.css'],
    encapsulation: ViewEncapsulation.Emulated,
    /* ViewEncapsulation.Native (We will loose global styles) */
})
export class JokeFormComponent {
    @Output() jokeCreated = new EventEmitter<JokeData>();
    @ViewChild('setup') setup: ElementRef;
    @ViewChild('punchline') punchline: ElementRef;
    @ViewChild('storyline') storyline: ElementRef;
    @ViewChild('hide') hide: MatSlideToggle;

    constructor(public snackBar: MatSnackBar) {
    }

    createJoke() {
        this.jokeCreated.emit(new JokeData(this.setup.nativeElement.value,
            this.punchline.nativeElement.value, this.storyline.nativeElement.value, this.hide.checked));
        this.snackBar.open('Joke Created', 'Close', {
            duration: 2000,
        });
        this.clearForm();
    }

    clearForm() {
        this.setup.nativeElement.value = '';
        this.punchline.nativeElement.value = '';
        this.storyline.nativeElement.value = '';
        this.hide.checked = false;
    }

}

