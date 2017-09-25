define('hela2/components/materialize-card-reveal', ['exports', 'ember', 'hela2/components/md-card-reveal'], function (exports, _ember, _mdCardReveal) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _mdCardReveal.default.extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember.default.deprecate("{{materialize-card-reveal}} has been deprecated. Please use {{md-card-reveal}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});