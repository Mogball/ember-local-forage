import StorageObject from 'ember-localforage/local/object';

const Storage = StorageObject.extend();

Storage.reopenClass({
  initialState() {
    return {
      counter: 0
    };
  }
});

export default Storage;
