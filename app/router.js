import EmberRouter from '@ember/routing/router';
import config from 'ember-app/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('Abstractroute');
  this.route('board');
  this.route('sections');
  this.route('order', { path: '/order/:order_id' });
});
