import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class Ex2Controller extends Controller {
    
    actions: {
        toggleActive(service){
        if(service.active){
          service = !service.active;
            console.log('jdkqsbfkqjfbqkubf');
        }
        else {
          service.active;
        }
        }
    }
}
