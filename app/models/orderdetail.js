import Model, { attr } from '@ember-data/model';


export default class OrderdetailModel extends Model {
    @attr('number') idOrder;
    @attr('number') idProduct;
    @attr('number') quantity;
    @attr('number') prepared;
}
