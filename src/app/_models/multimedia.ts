import {Legacy} from './legacy';

export interface Multimedia {
    rank: number;
    subtype: string;
    caption?: any;
    credit?: any;
    type: string;
    url: string;
    height: number;
    width: number;
    legacy: Legacy;
    subType: string;
    crop_name: string;
}