define('ember-keyboard/utils/get-code', ['exports', 'ember-keyboard/fixtures/code-map'], function (exports, _emberKeyboardFixturesCodeMap) {
  exports['default'] = getCode;

  function getCode(event) {
    return event.code || _emberKeyboardFixturesCodeMap['default'][event.keyCode];
  }
});