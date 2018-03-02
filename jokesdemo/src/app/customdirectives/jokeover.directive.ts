import { Directive, ElementRef, Renderer, HostListener } from '@angular/core';


@Directive({
    selector: '[appJokeOver]'
})
export class JokeOverDirective {

    constructor(private elementReference: ElementRef,
        private renderer: Renderer) {
    }

    @HostListener('mouseover')
    onMouseOver() {
        const part = this.elementReference.nativeElement.querySelector('.storyline');
        this.renderer.setElementStyle(part, 'backgroundColor', 'yellow');
    }

    @HostListener('mouseout')
    onMouseOut() {
        const part = this.elementReference.nativeElement.querySelector('.storyline');
        this.renderer.setElementStyle(part, 'backgroundColor', 'white');
    }

}
