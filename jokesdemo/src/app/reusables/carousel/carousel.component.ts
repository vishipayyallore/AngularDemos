import { Component, ContentChildren, QueryList, Input } from '@angular/core';
import { AfterContentInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { CarouselItemComponent } from './carousel-item/carouselItem.component';


@Component({
    selector: 'app-carousel',
    templateUrl: './carousel.component.html'
})
export class CarouselComponent implements AfterContentInit {
    @ContentChildren(CarouselItemComponent)
    public carouselItemsList: QueryList<CarouselItemComponent>;
    @Input()
    public delayBy: number;

    ngAfterContentInit(): void {
        const carouselItems = this.carouselItemsList.toArray();
        let count = 0;
        const max = carouselItems.length;

        setInterval(() => {
            const current = count % max;
            carouselItems.forEach((item) => item.isActive = false);
            carouselItems[current].isActive = true;
            count++;
        }, this.delayBy);
    }

}
