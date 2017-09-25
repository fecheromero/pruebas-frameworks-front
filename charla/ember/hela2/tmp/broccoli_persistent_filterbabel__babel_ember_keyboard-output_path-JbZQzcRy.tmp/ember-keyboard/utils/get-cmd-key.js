define('ember-keyboard/utils/get-cmd-key', ['exports'], function (exports) {
  exports['default'] = function (platform) {
    if (typeof FastBoot === 'undefined') {
      if (platform === undefined) {
        platform = navigator.platform;
      }
      if (platform.indexOf('Mac') > -1) {
        return 'meta';
      } else {
        return 'ctrl';
      }
    }
  };
});