define('ember-modal-dialog/components/positioned-container', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var computed = _ember.default.computed,
      observer = _ember.default.observer,
      on = _ember.default.on;
  var capitalize = _ember.default.String.capitalize;

  var SUPPORTED_TARGET_ATTACHMENTS = ['top', 'right', 'bottom', 'left', 'center', 'elementCenter', 'none'];

  exports.default = _ember.default.Component.extend({

    // target - element selector, element, or Ember View
    // targetAttachment - top, right, bottom, left, center, or none
    //   left, right, top, bottom (relative to target)
    //   center (relative to container)
    targetAttachment: 'center',

    isPositioned: computed('targetAttachment', 'target', 'renderInPlace', function () {
      if (this.get('renderInPlace')) {
        return false;
      }
      var target = this.get('target');
      var targetAttachment = this.get('targetAttachment');
      if (target === 'body' && (targetAttachment === 'center' || targetAttachment === 'middle center')) {
        return false;
      }

      if (target && targetAttachment) {
        return true;
      }

      return false;
    }),

    didGetPositioned: observer('isPositioned', on('didInsertElement', function () {
      if (this._state !== 'inDOM') {
        return;
      }

      if (this.get('isPositioned')) {
        this.updateTargetAttachment();
      } else {
        this.$().css('left', '').css('top', '');
      }
    })),

    getWrappedTargetAttachmentElement: function getWrappedTargetAttachmentElement() {
      var target = this.get('target');
      if (!target) {
        return null;
      }

      if (_ember.default.typeOf(target) === 'string') {
        var targetSelector = target;
        var wrappedElement = _ember.default.$(targetSelector).eq(0);
        _ember.default.assert('No element found for modal-dialog\'s target selector \'' + targetSelector + '\'.', wrappedElement);
        return wrappedElement;
      }

      // passed an ember view or component
      if (target.element) {
        return _ember.default.$(target.element);
      }

      // passed an element directly
      return _ember.default.$(target);
    },
    updateTargetAttachment: function updateTargetAttachment() {
      var targetAttachment = this.get('targetAttachment');
      // Convert tether-styled values like 'middle right' to 'right'
      targetAttachment = targetAttachment.split(' ').slice(-1)[0];
      _ember.default.assert('Positioned container supports targetAttachments of ' + SUPPORTED_TARGET_ATTACHMENTS.join(', '), SUPPORTED_TARGET_ATTACHMENTS.indexOf(targetAttachment) > -1);
      var targetAttachmentMethod = 'align' + capitalize(targetAttachment);
      var targetAttachmentElement = this.getWrappedTargetAttachmentElement();

      this[targetAttachmentMethod](targetAttachmentElement);
    },
    alignCenter: function alignCenter() {
      var elementWidth = this.$().outerWidth();
      var elementHeight = this.$().outerHeight();

      this.$().css('left', '50%').css('top', '50%').css('margin-left', elementWidth * -0.5).css('margin-top', elementHeight * -0.5);
    },
    alignLeft: function alignLeft(targetAttachmentElement) {
      _ember.default.assert('Left targetAttachment requires a target', targetAttachmentElement.length > 0);

      var elementWidth = this.$().outerWidth();
      var originOffset = targetAttachmentElement.offset();
      var originOffsetTop = originOffset.top - _ember.default.$(window).scrollTop();

      this.$().css('left', originOffset.left - elementWidth).css('top', originOffsetTop);
    },
    alignRight: function alignRight(targetAttachmentElement) {
      _ember.default.assert('Right targetAttachment requires a target', targetAttachmentElement.length > 0);

      var targetWidth = targetAttachmentElement.outerWidth();
      var originOffset = targetAttachmentElement.offset();
      var originOffsetTop = originOffset.top - _ember.default.$(window).scrollTop();

      this.$().css('left', originOffset.left + targetWidth).css('top', originOffsetTop);
    },
    alignTop: function alignTop(targetAttachmentElement) {
      _ember.default.assert('Top targetAttachment requires a target', targetAttachmentElement.length > 0);

      var elementWidth = this.$().outerWidth();
      var elementHeight = this.$().outerHeight();
      var originOffset = targetAttachmentElement.offset();
      var originOffsetTop = originOffset.top - _ember.default.$(window).scrollTop();
      var targetWidth = targetAttachmentElement.outerWidth();

      this.$().css('left', originOffset.left + targetWidth / 2 - elementWidth / 2).css('top', originOffsetTop - elementHeight);
    },
    alignBottom: function alignBottom(targetAttachmentElement) {
      _ember.default.assert('Bottom targetAttachment requires a target', targetAttachmentElement.length > 0);

      var elementWidth = this.$().outerWidth();
      var originOffset = targetAttachmentElement.offset();
      var originOffsetTop = originOffset.top - _ember.default.$(window).scrollTop();
      var targetWidth = targetAttachmentElement.outerWidth();
      var targetHeight = targetAttachmentElement.outerHeight();

      this.$().css('left', originOffset.left + targetWidth / 2 - elementWidth / 2).css('top', originOffsetTop + targetHeight);
    },
    alignElementCenter: function alignElementCenter(targetAttachmentElement) {
      _ember.default.assert('ElementCenter targetAttachment requires a target', targetAttachmentElement.length > 0);

      var elementWidth = this.$().outerWidth();
      var originOffset = targetAttachmentElement.offset();
      var originOffsetTop = originOffset.top - _ember.default.$(window).scrollTop();
      var targetWidth = targetAttachmentElement.outerWidth();
      var targetHeight = targetAttachmentElement.outerHeight();
      var elementHeight = this.$().outerHeight();

      this.$().css('left', originOffset.left + targetWidth / 2 - elementWidth / 2).css('top', originOffsetTop + targetHeight / 2 - elementHeight / 2);
    },
    alignNone: function alignNone() {}
  });
});