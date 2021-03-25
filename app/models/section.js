import Model, { attr, hasMany } from '@ember-data/model';

export default class SectionModel extends Model {
    // @attr('number') id;
    @attr('string') name;
    @attr('string') description;
    @hasMany('product') products;
}
