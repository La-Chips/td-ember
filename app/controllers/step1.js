import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class Step1Controller extends Controller {
    step = false;
     dispoItems = [];
     includeItems = [];
     dispoItemsIds_ = [];
     includedItemsIds_ = [];

     @action addToIncluded(){
        this.includeItems = this.dispoItemsIds_;
     }

     @action addAllToIncluded(){
         this.includeItems = this.dispoItems;
         console.log(this.includeItems);
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
