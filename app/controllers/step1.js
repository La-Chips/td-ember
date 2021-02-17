import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class Step1Controller extends Controller {
    step = false;
     dispoIems = [];
     includeItems = [];
     dispoIemsIds_ = [];
     includedItemsIds_ = [];

     @action addToIncluded(){
        this.includeItems = this.dispoIemsIds_;
     }

     @action addAllToIncluded(){
         this.includeItems = this.dispoIems;
     }

     @action removeFromIncluded(){
         console.log(123);
     }

     @action removeAllFromIncluded(){
         this.includeItems = [];
     }

     @action toogleStep(){
        console.log(123);

     }
}
