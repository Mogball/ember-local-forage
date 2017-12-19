import Ember from 'ember';
import { storageFor } from 'ember-localforage/helpers/storage';

export default Ember.Controller.extend({
  stats: storageFor('stats'),

  actions: {
    countUp() {
      this.incrementProperty('stats.counter');
    },
    resetCounter() {
      this.get('stats').reset();
    }
  }
});
