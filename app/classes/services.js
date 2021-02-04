export default class Services{
    services = [];

  constructor(serv) {
    this.services = serv;
  }

  get sumActive(){
      let active = this.services.filterBy('active',true);
      let somme = 0;
      active.forEach(element => {
          somme += element['price']
      });
      return somme;
  }

  get countActive(){
      return this.services.filterBy('active',true).length;
  }
}