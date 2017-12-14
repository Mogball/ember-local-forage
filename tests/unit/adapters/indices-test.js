import wait from 'ember-test-helpers/wait';
import { moduleFor, test } from 'ember-qunit';
import {
  storageEqual,
  storageDeepEqual
} from '../../helpers/storage';

moduleFor('adapter:application', 'Unit | Adapter | indices', {
  // Specify the other units that are required for this test.
  // needs: ['serializer:foo']
  beforeEach: function() {
    window.localStorage.clear();
    window.sessionStorage.clear();
  }
});

test('it persists the index', function(assert) {
  assert.expect(2);
  var adapter = this.subject();

  storageEqual(assert, window.localStorage['localforage/index-projects'], undefined);

  adapter._addToIndex('projects', '1234');
  // Add operations are asynchronous so we have to wait a moment
  wait().then(() => {
    storageDeepEqual(assert, window.localStorage['localforage/index-projects'], ['1234']);
  });
});

test('it does not persists duplicates to index', function(assert) {
  assert.expect(2);
  var adapter = this.subject();

  storageEqual(assert, window.localStorage['localforage/index-projects'], undefined);

  adapter._addToIndex('projects', '1234');
  adapter._addToIndex('projects', '1234');
  wait().then(() => {
    storageDeepEqual(assert, window.localStorage['localforage/index-projects'], ['1234']);
  });
});

test('it removes ids from index', function(assert) {
  assert.expect(3);
  var adapter = this.subject();

  storageEqual(assert, window.localStorage['localforage/index-projects'], undefined);

  adapter._addToIndex('projects', '1234');
  wait().then(() => {
    storageDeepEqual(assert, window.localStorage['localforage/index-projects'], ['1234']);
    adapter._removeFromIndex('projects', '1234');
  });
  wait().then(() => {
    storageDeepEqual(assert, window.localStorage['localforage/index-projects'], []);
  });
});
