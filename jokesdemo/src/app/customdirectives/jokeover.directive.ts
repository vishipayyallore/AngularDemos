import { Directive, ElementRef, Renderer, HostListener } from '@angular/core';


@Directive({
    selector: '[appJokeOver]'
})
export class JokeOverDirective {
    constructor(private elementReference: ElementRef,
        private renderer: Renderer) {
        // elementReference.nativeElement.style.backgroundColor = 'yellow';
        // renderer.setElementStyle(elementReference.nativeElement, 'backgroundColor', 'yellow');
    }

    @HostListener('mouseover')
    onMouseOver() {
        const part = this.elementReference.nativeElement.querySelector('.storyline') ;
        this.renderer.setElementStyle(part, 'backgroundColor', 'yellow');
    }

}
