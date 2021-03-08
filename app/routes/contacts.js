import Route from '@ember/routing/route';
import MyContacts from '../classes/contacts';
import { action } from '@ember/object';

export default class ContactsRoute extends Route {
  model() {
    return new MyContacts(this.store.findAll('contact')); //model contact
  }

  @action delete(contact) {
    contact.deleteRecord();
    this.store.deleteRecord('contacts', contact)
    console.log(contact);
  }

  @action cancelDeletion(contacts) {
    contacts.forEach(
      (c) => c.rollbackAttributes()
    )
  }
}