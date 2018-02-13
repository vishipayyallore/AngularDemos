import { Component } from '@angular/core';
import { Person } from '../../models/person.data';


@Component({
    selector: 'app-ngfor-demo',
    templateUrl: './ngfordemo.component.html',
    styleUrls: ['./ngfordemo.component.css']
})
export class NgForDemoComponent {
    people: Person[] = [
        { 'name': 'Shiva Sai' },
        { 'name': 'Mathew Phlips' },
        { 'name': 'Douglas  Pace' },
        { 'name': 'Mcleod  Mueller' },
        { 'name': 'Day  Meyers' },
        { 'name': 'Aguirre  Ellis' },
        { 'name': 'Cook  Tyson' }
    ];
}
