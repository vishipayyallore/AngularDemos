import { Directive, ElementRef, Renderer, HostListener } from '@angular/core';


@Directive({
    selector: '[appJokeHover]'
})
export class JokeHoverDirective {
    constructor(private elementReference: ElementRef,
        private renderer: Renderer) {
        // elementReference.nativeElement.style.backgroundColor = 'yellow';
        // renderer.setElementStyle(elementReference.nativeElement, 'backgroundColor', 'yellow');
    }

    @HostListener('mousehover')
    onMouseHover() {
        let part = this.elementReference.nativeElement.querySelector('storyline') ;
        this.renderer.setElementStyle(part, 'display', 'block');
    }

}
