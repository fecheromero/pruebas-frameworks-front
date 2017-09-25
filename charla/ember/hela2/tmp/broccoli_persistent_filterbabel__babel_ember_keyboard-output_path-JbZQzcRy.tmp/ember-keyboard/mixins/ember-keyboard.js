define('ember-keyboard/mixins/ember-keyboard', ['exports', 'ember'], function (exports, _ember) {
  var Evented = _ember['default'].Evented;
  var Mixin = _ember['default'].Mixin;
  var get = _ember['default'].get;
  var service = _ember['default'].inject.service;
  exports['default'] = Mixin.create(Evented, {
    keyboardPriority: 0,

    keyboard: service(),

    init: function init() {
      get(this, 'keyboard').register(this);

      return this._super.apply(this, arguments);
    },

    willDestroyElement: function willDestroyElement() {
      this._super.apply(this, arguments);

      get(this, 'keyboard').unregister(this);
    },

    willDestroy: function willDestroy() {
      this._super.apply(this, arguments);

      get(this, 'keyboard').unregister(this);
    }
  });
});