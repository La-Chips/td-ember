import Model, { attr } from '@ember-data/model';

export default class TimeslotModel extends Model {
    @attr('number') id;
    @attr('date') slotDate;
    @attr('number') full;
    @attr('number') expired;
}
