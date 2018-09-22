import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('home');
  this.route('books');
  this.route('bookdetail');
  this.route('authors');
  this.route('authordetail');
});

export default Router;
