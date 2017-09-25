define('hela2/components/materialize-modal', ['exports', 'ember', 'hela2/components/md-modal'], function (exports, _ember, _mdModal) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _mdModal.default.extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember.default.deprecate("{{materialize-modal}} has been deprecated. Please use {{md-modal}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});