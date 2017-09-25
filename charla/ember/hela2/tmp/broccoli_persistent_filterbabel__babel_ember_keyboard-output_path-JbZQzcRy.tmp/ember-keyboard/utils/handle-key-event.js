define('ember-keyboard/utils/handle-key-event', ['exports', 'ember', 'ember-keyboard/utils/get-code', 'ember-keyboard/utils/listener-name'], function (exports, _ember, _emberKeyboardUtilsGetCode, _emberKeyboardUtilsListenerName) {
  exports['default'] = handleKeyEvent;
  var hasListeners = _ember['default'].hasListeners;
  var get = _ember['default'].get;
  var getProperties = _ember['default'].getProperties;

  var gatherKeys = function gatherKeys(event) {
    var key = (0, _emberKeyboardUtilsGetCode['default'])(event);

    return ['alt', 'ctrl', 'meta', 'shift'].reduce(function (keys, keyName) {
      if (event[keyName + 'Key']) {
        keys.push(keyName);
      }

      return keys;
    }, [key]);
  };

  function handleKeyEvent(event, sortedResponders) {
    var currentPriorityLevel = undefined;
    var noFirstResponders = true;
    var isLax = true;

    var keys = gatherKeys(event);
    var listenerNames = [(0, _emberKeyboardUtilsListenerName['default'])(event.type, keys), (0, _emberKeyboardUtilsListenerName['default'])(event.type)];

    sortedResponders.every(function (responder) {
      var _getProperties = getProperties(responder, 'keyboardFirstResponder', 'keyboardPriority');

      var keyboardFirstResponder = _getProperties.keyboardFirstResponder;
      var keyboardPriority = _getProperties.keyboardPriority;

      if (keyboardFirstResponder || noFirstResponders && keyboardPriority >= currentPriorityLevel || isLax) {
        if (!get(responder, 'keyboardLaxPriority')) {
          isLax = false;
        }

        if (keyboardFirstResponder) {
          if (!isLax) {
            noFirstResponders = false;
          }
        } else {
          currentPriorityLevel = keyboardPriority;
        }

        listenerNames.forEach(function (triggerName) {
          if (hasListeners(responder, triggerName)) {
            responder.trigger(triggerName, event);
          }
        });

        return true;
      } else {
        return false;
      }
    });
  }
});