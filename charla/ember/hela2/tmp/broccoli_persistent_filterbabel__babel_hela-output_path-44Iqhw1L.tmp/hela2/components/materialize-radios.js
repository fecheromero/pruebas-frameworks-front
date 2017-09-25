define('hela2/components/materialize-radios', ['exports', 'ember', 'hela2/components/md-radios'], function (exports, _ember, _mdRadios) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _mdRadios.default.extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember.default.deprecate("{{materialize-radios}} has been deprecated. Please use {{md-radios}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});