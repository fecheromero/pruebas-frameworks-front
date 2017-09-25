define('ember-keyboard/utils/get-key-code', ['exports', 'ember-keyboard/fixtures/code-map'], function (exports, _emberKeyboardFixturesCodeMap) {
  exports['default'] = getKeyCode;

  function getKeyCode(key) {
    return Object.keys(_emberKeyboardFixturesCodeMap['default']).filter(function (keyCode) {
      return _emberKeyboardFixturesCodeMap['default'][keyCode] === key;
    })[0];
  }
});