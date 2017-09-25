define('ember-keyboard/fixtures/code-map', ['exports', 'ember-keyboard/utils/generate-code-map'], function (exports, _emberKeyboardUtilsGenerateCodeMap) {

  var platform = undefined,
      product = '';

  if (typeof FastBoot === 'undefined') {
    platform = navigator.platform;
    product = navigator.product;
  }

  exports['default'] = (0, _emberKeyboardUtilsGenerateCodeMap['default'])(platform, product);
});