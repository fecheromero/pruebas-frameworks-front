define('ember-keyboard/services/keyboard', ['exports', 'ember', 'ember-keyboard/utils/handle-key-event', 'ember-keyboard/listeners/key-events'], function (exports, _ember, _emberKeyboardUtilsHandleKeyEvent, _emberKeyboardListenersKeyEvents) {
  var Service = _ember['default'].Service;
  var computed = _ember['default'].computed;
  var get = _ember['default'].get;
  var getOwner = _ember['default'].getOwner;
  var run = _ember['default'].run;
  var filterBy = computed.filterBy;
  var sort = computed.sort;
  exports['default'] = Service.extend({
    registeredResponders: computed(function () {
      return _ember['default'].A();
    }),
    activeResponders: filterBy('registeredResponders', 'keyboardActivated').volatile(),
    sortedResponders: sort('activeResponders', function (a, b) {
      if (get(a, 'keyboardFirstResponder')) {
        return -1;
      } else if (get(b, 'keyboardFirstResponder')) {
        return 1;
      } else {
        return get(b, 'keyboardPriority') - get(a, 'keyboardPriority');
      }
    }).volatile(),

    init: function init() {
      var _this = this;

      this._super.apply(this, arguments);

      if (typeof FastBoot !== 'undefined') {
        return;
      }

      var config = getOwner(this).resolveRegistration('config:environment') || {};
      var listeners = get(config, 'emberKeyboard.listeners') || ['keyUp', 'keyDown', 'keyPress'];
      var eventNames = listeners.map(function (name) {
        return name.toLowerCase() + '.ember-keyboard-listener';
      }).join(' ');

      _ember['default'].$(document).on(eventNames, null, function (event) {
        run(function () {
          (0, _emberKeyboardUtilsHandleKeyEvent['default'])(event, get(_this, 'sortedResponders'));
        });
      });
    },

    willDestroy: function willDestroy() {
      this._super.apply(this, arguments);

      if (typeof FastBoot !== 'undefined') {
        return;
      }

      _ember['default'].$(document).off('.ember-keyboard-listener');
    },

    register: function register(responder) {
      get(this, 'registeredResponders').pushObject(responder);
    },

    unregister: function unregister(responder) {
      get(this, 'registeredResponders').removeObject(responder);
    },

    keyDown: function keyDown() {
      return _emberKeyboardListenersKeyEvents.keyDown.apply(undefined, arguments);
    },

    keyPress: function keyPress() {
      return _emberKeyboardListenersKeyEvents.keyPress.apply(undefined, arguments);
    },

    keyUp: function keyUp() {
      return _emberKeyboardListenersKeyEvents.keyUp.apply(undefined, arguments);
    }
  });
});