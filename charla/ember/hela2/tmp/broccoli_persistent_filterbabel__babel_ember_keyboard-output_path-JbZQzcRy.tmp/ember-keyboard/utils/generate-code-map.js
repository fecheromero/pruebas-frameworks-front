define('ember-keyboard/utils/generate-code-map', ['exports', 'ember', 'ember-keyboard/utils/assign-polyfill', 'ember-keyboard/fixtures/code-maps/default', 'ember-keyboard/fixtures/code-maps/mac-safari-and-chrome', 'ember-keyboard/fixtures/code-maps/gecko', 'ember-keyboard/fixtures/code-maps/gecko/linux', 'ember-keyboard/fixtures/code-maps/gecko/mac', 'ember-keyboard/fixtures/code-maps/chromium/linux'], function (exports, _ember, _emberKeyboardUtilsAssignPolyfill, _emberKeyboardFixturesCodeMapsDefault, _emberKeyboardFixturesCodeMapsMacSafariAndChrome, _emberKeyboardFixturesCodeMapsGecko, _emberKeyboardFixturesCodeMapsGeckoLinux, _emberKeyboardFixturesCodeMapsGeckoMac, _emberKeyboardFixturesCodeMapsChromiumLinux) {
  exports['default'] = generateCodeMap;

  var assign = _ember['default'].assign || _emberKeyboardUtilsAssignPolyfill['default'];

  function generateCodeMap() {
    var platform = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];
    var product = arguments.length <= 1 || arguments[1] === undefined ? '' : arguments[1];

    var isGecko = product.indexOf('Gecko') > -1;
    var isChromium = product.indexOf('Chromium') > -1;
    var isChrome = product.indexOf('Chrome') > -1;
    var isSafari = product.indexOf('Safari') > -1;
    var isLinux = platform.indexOf('Linux') > -1;
    var isMac = platform.indexOf('Mac') > -1;

    var codeMap = assign({}, _emberKeyboardFixturesCodeMapsDefault['default']);

    if (isGecko) {
      assign(codeMap, _emberKeyboardFixturesCodeMapsGecko['default']);

      if (isLinux) {
        assign(codeMap, _emberKeyboardFixturesCodeMapsGeckoLinux['default']);
      } else if (isMac) {
        assign(codeMap, _emberKeyboardFixturesCodeMapsGeckoMac['default']);
      }
    } else if (isChromium && isLinux) {
      assign(codeMap, _emberKeyboardFixturesCodeMapsChromiumLinux['default']);
    } else if (isMac && (isSafari || isChrome)) {
      assign(codeMap, _emberKeyboardFixturesCodeMapsMacSafariAndChrome['default']);
    }

    return codeMap;
  }
});