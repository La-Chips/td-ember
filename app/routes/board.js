import Route from '@ember/routing/route';
import { action } from '@ember/object';


export default class BoardRoute extends Route {
    @action logout() {
        this.transitionTo('index');
    }
}
