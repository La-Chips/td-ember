import abstractroute from './abstractroute';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';


export default class BoardRoute extends abstractroute {
    @service userAuth;

    model() {
        let user = this.userAuth.user;
    }

    @action logout() {
        this.userAuth.logout();
        this.transitionTo('index');
    }
}
