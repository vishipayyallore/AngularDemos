import { Person } from './person.data';


export class People {
    country: string;
    peoplesList: Array<Person>;
    // tslint:disable-next-line:no-inferrable-types
    backGroundColor?: string = 'blue';
}
