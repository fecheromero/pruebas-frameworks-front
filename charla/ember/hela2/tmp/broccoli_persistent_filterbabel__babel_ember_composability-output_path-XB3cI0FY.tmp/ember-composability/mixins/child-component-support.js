define('ember-composability/mixins/child-component-support', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var assert = _ember.default.assert,
      computed = _ember.default.computed,
      Mixin = _ember.default.Mixin;
  exports.default = Mixin.create({
    init: function init() {
      this._super.apply(this, arguments);
      assert('Must define _parentComponentTypes', this.get('_parentComponentTypes'));
      this._registerWithParent();
    },
    willDestroyElement: function willDestroyElement() {
      this._unregisterWithParent();
      this._super.apply(this, arguments);
    },


    composableParent: computed(function () {
      return this._componentToRegisterTo();
    }),

    _componentToRegisterTo: function _componentToRegisterTo() {
      var c = null;
      var parentTypes = this.get('_parentComponentTypes');
      for (var i = 0; i < parentTypes.length && !c; i++) {
        c = this.nearestOfType(parentTypes[i]);
      }
      return c;
    },
    shouldRegisterToParent: function shouldRegisterToParent() /* parentComponent*/{
      return true;
    },
    _registerWithParent: function _registerWithParent() {
      var parentComponent = this._componentToRegisterTo();
      if (parentComponent) {
        if (this.shouldRegisterToParent(parentComponent)) {
          parentComponent.registerChildComponent(this);
        }
        this.set('composableParent', parentComponent);
      }
    },
    _unregisterWithParent: function _unregisterWithParent() {
      var parentComponent = this._componentToRegisterTo();
      if (parentComponent) {
        parentComponent.unregisterChildComponent(this);
      }
    }
  });
});