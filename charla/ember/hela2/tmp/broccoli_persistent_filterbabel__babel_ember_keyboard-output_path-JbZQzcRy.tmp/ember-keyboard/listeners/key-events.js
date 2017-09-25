define('ember-keyboard/listeners/key-events', ['exports', 'ember', 'ember-keyboard/fixtures/code-map', 'ember-keyboard/utils/listener-name', 'ember-keyboard/fixtures/modifiers-array'], function (exports, _ember, _emberKeyboardFixturesCodeMap, _emberKeyboardUtilsListenerName, _emberKeyboardFixturesModifiersArray) {
  exports.keyDown = keyDown;
  exports.keyPress = keyPress;
  exports.keyUp = keyUp;

  var keyMapValues = Object.keys(_emberKeyboardFixturesCodeMap['default']).map(function (key) {
    return _emberKeyboardFixturesCodeMap['default'][key];
  });
  var validKeys = keyMapValues.concat(_emberKeyboardFixturesModifiersArray['default']);

  var validateKeys = function validateKeys(keys) {
    keys.forEach(function (key) {
      if (validKeys.indexOf(key) === -1) {
        _ember['default'].Logger.error('`' + key + '` is not a valid key name');
      }
    });
  };

  var formattedListener = function formattedListener(type, keysString) {
    var keys = keysString !== undefined ? keysString.split('+') : [];

    validateKeys(keys);

    return (0, _emberKeyboardUtilsListenerName['default'])(type, keys);
  };

  function keyDown(keys) {
    return formattedListener('keydown', keys);
  }

  function keyPress(keys) {
    return formattedListener('keypress', keys);
  }

  function keyUp(keys) {
    return formattedListener('keyup', keys);
  }
});