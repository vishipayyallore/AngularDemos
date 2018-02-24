import { Directive, ElementRef, Renderer } from '@angular/core';


@Directive({
    selector: '[appJokeHover]'
})
export class JokeHoverDirective {
    constructor(private elementReference: ElementRef,
                private renderer: Renderer) {
        // elementReference.nativeElement.style.backgroundColor = 'yellow';
        renderer.setElementStyle(elementReference.nativeElement, 'backgroundColor', 'yellow');
    }

}
