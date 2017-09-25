define('hela2/components/materialize-button', ['exports', 'ember', 'hela2/components/md-btn'], function (exports, _ember, _mdBtn) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _mdBtn.default.extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember.default.deprecate("{{materialize-button}} has been deprecated. Please use {{md-btn}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});