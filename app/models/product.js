import Model, { attr, belongsTo } from '@ember-data/model';


export default class ProductModel extends Model {
    // @attr('number') id;
    @attr('string') name;
    @attr('string') comments;
    @attr('string') image;
    @attr('number') price;
    @attr('number') promotion;
    @attr('number') idSection;
    @belongsTo('section') section;
}
