import { Directive, ElementRef, Renderer, HostListener, HostBinding } from '@angular/core';


@Directive({
    selector: '[appJokeOver]'
})
export class JokeOverDirective {
    @HostBinding('class.borderColor')
    private isHovering: boolean;

    constructor(private elementReference: ElementRef,
        private renderer: Renderer) {
    }

    @HostListener('mouseover')
    onMouseOver() {
        const part = this.elementReference.nativeElement.querySelector('.storyline');
        this.renderer.setElementStyle(part, 'backgroundColor', 'cornflowerblue');
        this.isHovering = true;
    }

    @HostListener('mouseout')
    onMouseOut() {
        const part = this.elementReference.nativeElement.querySelector('.storyline');
        this.renderer.setElementStyle(part, 'backgroundColor', 'white');
        this.isHovering = false;
    }

}
