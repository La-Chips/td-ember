import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class Ex2Controller extends Controller {
    @action
    toggleActive(service){
    if(service.active){
      service = !service.active;
    }
    else {
      service.active;
    }
  }
}
