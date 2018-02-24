import { Directive, ElementRef } from '@angular/core';


@Directive({
    selector: '[appJokeHover]'
})
export class JokeHoverDirective {
    constructor(private elementReference: ElementRef) {
        elementReference.nativeElement.style.backgroundColor = 'yellow';
    }

}
