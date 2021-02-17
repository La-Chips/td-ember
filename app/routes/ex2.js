import Route from '@ember/routing/route';
import Services from '../classes/services';
import {datas,promos} from '../data/datas';
import { action } from '@ember/object';

export default class Ex2Route extends Route {
    model(){
        return new Services(datas);
    }

}
