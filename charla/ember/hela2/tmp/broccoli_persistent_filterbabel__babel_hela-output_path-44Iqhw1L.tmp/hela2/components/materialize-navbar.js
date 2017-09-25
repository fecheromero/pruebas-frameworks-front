define('hela2/components/materialize-navbar', ['exports', 'ember', 'hela2/components/md-navbar'], function (exports, _ember, _mdNavbar) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _mdNavbar.default.extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember.default.deprecate("{{materialize-navbar}} has been deprecated. Please use {{md-navbar}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});