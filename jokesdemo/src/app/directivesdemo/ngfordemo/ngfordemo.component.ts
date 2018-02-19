import { Component } from '@angular/core';
import { Person } from '../../models/person.data';
import { People } from '../../models/people.data';

@Component({
    selector: 'app-ngfor-demo',
    templateUrl: './ngfordemo.component.html',
    styleUrls: ['./ngfordemo.component.css']
})
export class NgForDemoComponent {
    fontColor = 'red';
    backgroundColor = '#ABCDEF';

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
                { 'name': 'Mathew Phlips', age: 26 }],
            backGroundColor: 'blue'
        },
        {
            country: 'US', peoplesList: [
                { 'name': 'Mcleod  Mueller', age: 27 },
                { 'name': 'Day  Meyers', age: 28 }],
            backGroundColor: 'red'
        },
        {
            country: 'HK', peoplesList: [
                { 'name': 'Aguirre  Ellis', age: 29 },
                { 'name': 'Cook  Tyson', age: 30 }],
            backGroundColor: 'green'
        },
        {
            country: 'XX', peoplesList: [
                { 'name': 'XX Aguirre  Ellis', age: 29 },
                { 'name': 'XX Cook  Tyson', age: 30 }],
            backGroundColor: 'orange'
        }
    ];

}
