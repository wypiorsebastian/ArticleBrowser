import {Doc} from './doc';
import {Meta} from './meta';

export interface Response {
    docs?: Doc[];
    meta?: Meta;
}