define('ember-modal-dialog/components/liquid-tether-dialog', ['exports', 'ember', 'ember-modal-dialog/components/basic-dialog', 'ember-modal-dialog/templates/components/liquid-tether-dialog'], function (exports, _ember, _basicDialog, _liquidTetherDialog) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var dasherize = _ember.default.String.dasherize;
  var computed = _ember.default.computed;
  exports.default = _basicDialog.default.extend({
    layout: _liquidTetherDialog.default,

    targetAttachmentClass: computed('targetAttachment', function () {
      var targetAttachment = this.get('targetAttachment') || '';
      return 'ember-modal-dialog-target-attachment-' + dasherize(targetAttachment);
    }),

    targetAttachment: null,
    attachment: null,
    didReceiveAttrs: function didReceiveAttrs() {
      this._super.apply(this, arguments);
      if (!this.get('attachment')) {
        this.set('attachment', 'middle center');
      }
      if (!this.get('targetAttachment')) {
        this.set('targetAttachment', 'middle center');
      }
    },

    tetherClassPrefix: computed({
      get: function get() {
        return 'liquid-tether';
      },
      set: function set(key, val) {
        if (val) {
          return val;
        }
        return 'liquid-tether';
      }
    }),
    hasOverlay: true,
    tetherTarget: null // element, css selector, view instance, 'viewport', or 'scroll-handle'
    // offset - passed in
    // targetOffset - passed in
    // targetModifier - passed in
  });
});