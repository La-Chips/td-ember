import abstractroute from './abstractroute';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import RSVP from 'rsvp';


export default class BoardRoute extends abstractroute {
    @service userAuth;

    model() {
        let user = this.userAuth.user;
        if (user) {
            return RSVP.hash({
                orders: this.store.query('order', {
                    filter: { idEmployee: user.email },
                    include: 'orderdetails',
                }),
                employee: user,
            });
        }
    }

    @action logout() {
        this.userAuth.logout();
        this.transitionTo('index');
    }
}
