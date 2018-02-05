import { Component, Input, Output, EventEmitter } from '@angular/core';
import { JokeData } from '../../models/joke.data';
import {
    OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit,
    AfterViewChecked, OnDestroy, SimpleChanges
} from '@angular/core';

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



/*
new - data is undefined
ngOnChanges - data is [object Object]
ngOnInit  - data is [object Object]
ngDoCheck
ngAfterContentInit
ngAfterContentChecked
ngAfterViewInit
ngAfterViewChecked

    constructor() {
        console.log(`new - data is ${this.joke}`);
    }

    ngOnChanges(changes: SimpleChanges) {
        console.log(`ngOnChanges - data is ${this.joke}`);

        for (let key in changes) {
            console.log(`${key} changed.
    Current: ${changes[key].currentValue}.
    Previous: ${changes[key].previousValue}`);
        }
    }

    ngOnInit() {
        // Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        // Add 'implements OnInit' to the class.
        console.log(`ngOnInit  - data is ${this.joke}`);
    }

    ngDoCheck() {
        console.log('ngDoCheck');
    }

    ngAfterContentInit() {
        // Called after ngOnInit when the component's or directive's content has been initialized.
        // Add 'implements AfterContentInit' to the class.
        console.log('ngAfterContentInit');
    }

    ngAfterContentChecked() {
        // Called after every check of the component's or directive's content.
        // Add 'implements AfterContentChecked' to the class.
        console.log('ngAfterContentChecked');
    }

    ngAfterViewInit() {
        // Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
        // Add 'implements AfterViewInit' to the class.
        console.log('ngAfterViewInit');
    }

    ngAfterViewChecked() {
        // Called after every check of the component's view. Applies to components only.
        // Add 'implements AfterViewChecked' to the class.
        console.log('ngAfterViewChecked');
    }

    ngOnDestroy() {
        // Called once, before the instance is destroyed.
        // Add 'implements OnDestroy' to the class.

    }

*/
