import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from "@glimmer/tracking";

export default class Ex1Controller extends Controller {
    @tracked content = '';
    @tracked info = '';
    max = 100;


    @action
    save() {
        this.info = 'Note Sauvegardé';
    }

    @action
    clear() {
        this.content = '';
        this.info  = ''
    }

    @action
    update(){
        this.info = 'Note modifiée';
    }

    get size() {
        return this.max - this.content.length;
    }
    get style() {
        let text = '';
        if (this.size < 10) text = 'alert-danger';
        else if (this.size < 20) text = 'alert-warning';
        else text = 'alert-primary';
        return text;
    }
    
}
