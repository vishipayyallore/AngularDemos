import { Component } from '@angular/core';
import { Person } from '../../models/person.data';
import { People } from '../../models/people.data';

@Component({
    selector: 'app-ngfor-demo',
    templateUrl: './ngfordemo.component.html',
    styleUrls: ['./ngfordemo.component.css']
})
export class NgForDemoComponent {
    people: Person[] = [
        { 'name': 'Shiva Sai', age: 25 },
        { 'name': 'Mathew Phlips', age: 26 },
        { 'name': 'Douglas  Pace', age: 27 },
        { 'name': 'Mcleod  Mueller', age: 28 },
        { 'name': 'Day  Meyers', age: 29 },
        { 'name': 'Aguirre  Ellis', age: 30 },
        { 'name': 'Cook  Tyson', age: 31 }
    ];

    peopleList: Array<People> = [
        {
            country: 'UK', peoplesList: [
                { 'name': 'Shiva Sai', age: 25 },
                { 'name': 'Mathew Phlips', age: 26 }]
        },
        {
            country: 'US', peoplesList: [
                { 'name': 'Mcleod  Mueller', age: 25 },
                { 'name': 'Day  Meyers', age: 25 },
                { 'name': 'Aguirre  Ellis', age: 25 },
                { 'name': 'Cook  Tyson', age: 25 }]
        }
    ];

}
