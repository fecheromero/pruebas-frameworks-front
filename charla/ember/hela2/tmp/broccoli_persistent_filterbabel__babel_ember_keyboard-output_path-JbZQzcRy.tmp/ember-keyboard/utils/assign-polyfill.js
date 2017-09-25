define("ember-keyboard/utils/assign-polyfill", ["exports"], function (exports) {
  exports["default"] = assignPolyfill;

  function assignPolyfill(original) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    for (var i = 0, l = args.length; i < l; i++) {
      var arg = args[i];
      if (!arg) {
        continue;
      }

      var updates = Object.keys(arg);

      for (var _i = 0, _l = updates.length; _i < _l; _i++) {
        var prop = updates[_i];
        original[prop] = arg[prop];
      }
    }

    return original;
  }
});