import { Component, ContentChildren, QueryList, Input } from '@angular/core';
import { AfterContentInit } from '@angular/core/src/metadata/lifecycle_hooks';


@Component({
    selector: 'app-carousel',
    templateUrl: './carousel.component.html'
})
export class CarouselComponent implements AfterContentInit {
    @ContentChildren(CarouselComponent)
    carouselItemsList: QueryList<CarouselComponent>;
    @Input()
    delayBy: number;

    ngAfterContentInit(): void {
        throw new Error('Method not implemented.');
    }

}
