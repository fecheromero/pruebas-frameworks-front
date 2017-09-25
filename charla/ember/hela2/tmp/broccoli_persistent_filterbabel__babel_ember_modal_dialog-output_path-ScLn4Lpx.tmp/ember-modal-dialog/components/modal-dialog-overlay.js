define('ember-modal-dialog/components/modal-dialog-overlay', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _ember.default.Component.extend({
    init: function init() {
      this._super.apply(this, arguments);
      (true && !(false) && _ember.default.deprecate('The modal-dialog-overlay component is deprecated. Use a div with an onclick handler instead. Will be removed in 3.0.0', false, { id: 'ember-modal-dialog.modal-dialog-overlay', until: '3.0.0' }));
    },

    attributeBindings: ['data-ember-modal-dialog-overlay'],
    'data-ember-modal-dialog-overlay': true,

    // trigger only when clicking the overlay itself, not its children
    click: function click(event) {
      if (event.target === this.get('element')) {
        this.sendAction();
      }
    }
  });
});