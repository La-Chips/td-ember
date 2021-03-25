import Route from '@ember/routing/route';
import { action } from '@ember/object';

export default class SectionsAddProductRoute extends Route {
    model() {
        return this.store.findAll('section', { include: 'products' });
    }

    @action addProduct(product) {
        let newProduct = this.store.createRecord('product', product);
        newProduct.save().then(() => this.transitionTo('sections'));
    }
}