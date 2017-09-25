define('ember-keyboard/utils/trigger-event', ['exports', 'ember', 'ember-keyboard/utils/assign-polyfill', 'ember-keyboard/utils/get-cmd-key', 'ember-keyboard', 'ember-keyboard/fixtures/modifiers-array'], function (exports, _ember, _emberKeyboardUtilsAssignPolyfill, _emberKeyboardUtilsGetCmdKey, _emberKeyboard, _emberKeyboardFixturesModifiersArray) {
  var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

  var triggerKeyEvent = function triggerKeyEvent(eventType, rawCode, element) {
    var event = _ember['default'].$.Event(eventType);
    var parts = rawCode.split('+');

    var _parts$filter = parts.filter(function (part) {
      return !_emberKeyboardFixturesModifiersArray['default'].includes(part);
    });

    var _parts$filter2 = _slicedToArray(_parts$filter, 1);

    var code = _parts$filter2[0];

    var modifiers = parts.filter(function (part) {
      return part !== code;
    });
    var properties = modifiers.reduce(function (properties, modifier) {
      modifier = modifier === 'cmd' ? (0, _emberKeyboardUtilsGetCmdKey['default'])() : modifier;
      properties[modifier + 'Key'] = true;

      return properties;
    }, {});

    (0, _emberKeyboardUtilsAssignPolyfill['default'])(event, { code: code, keyCode: (0, _emberKeyboard.getKeyCode)(code) }, properties);

    _ember['default'].$(element || document).trigger(event);
  };

  var triggerKeyDown = function triggerKeyDown(code, element) {
    triggerKeyEvent('keydown', code, element);
  };

  var triggerKeyPress = function triggerKeyPress(code, element) {
    triggerKeyEvent('keypress', code, element);
  };

  var triggerKeyUp = function triggerKeyUp(code, element) {
    triggerKeyEvent('keyup', code, element);
  };

  exports.triggerKeyDown = triggerKeyDown;
  exports.triggerKeyPress = triggerKeyPress;
  exports.triggerKeyUp = triggerKeyUp;
});