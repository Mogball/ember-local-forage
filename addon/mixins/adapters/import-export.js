import Ember from 'ember';
import { importData, exportData } from 'ember-localforage/helpers/import-export';

const {
  Mixin,
} = Ember;

export default Mixin.create({
  importData(store, content, options) {
    return importData(store, content, options);
  },

  exportData(store, types, options) {
    return exportData(store, types, options);
  }
});
