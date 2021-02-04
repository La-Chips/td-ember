import Route from '@ember/routing/route';
import Services from '../classes/services';
import {datas} from '../data/datas';

export default class Ex2Route extends Route {
    model(){
        return new Services(datas);
    }

    
}
