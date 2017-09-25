define('ember-keyboard/mixins/activate-keyboard-on-insert', ['exports', 'ember'], function (exports, _ember) {
  var Mixin = _ember['default'].Mixin;
  var on = _ember['default'].on;
  var set = _ember['default'].set;
  exports['default'] = Mixin.create({
    activateKeyboardWhenPresent: on('didInsertElement', function () {
      set(this, 'keyboardActivated', true);
    })
  });
});