import { Component } from '@angular/core';


@Component({
    selector: 'app-ngfor-demo',
    templateUrl: './ngfordemo.component.html',
    styleUrls: ['./ngfordemo.component.css']
})
export class NgForDemoComponent {
    people: any[] = [
        { 'name': 'Shiva Sai' },
        { 'name': 'Mathew Phlips' },
        { 'name': 'Douglas  Pace' },
        { 'name': 'Mcleod  Mueller' },
        { 'name': 'Day  Meyers' },
        { 'name': 'Aguirre  Ellis' },
        { 'name': 'Cook  Tyson' }
    ];
}
