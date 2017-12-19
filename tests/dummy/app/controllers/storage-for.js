import Ember from 'ember';
import { storageFor } from 'ember-localforage';

export default Ember.Controller.extend({
  settings: storageFor('settings'),

  actions: {
    toggleWelcomeMessage() {
      this.toggleProperty('settings.welcomeMessageSeen');
    }
  }
});