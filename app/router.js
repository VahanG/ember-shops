import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('shops', function() {
    this.route('shop',{path:'/:shop_id'});
  });
});

export default Router;
