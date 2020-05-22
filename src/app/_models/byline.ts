import {Person} from './person';

export interface Byline {
    original: string;
    person: Person[];
    organization?: any;
}