define('ember-cli-materialize/components/md-loader', ['exports', 'ember', 'ember-cli-materialize/mixins/uses-settings', 'ember-cli-materialize/templates/components/md-loader'], function (exports, _ember, _emberCliMaterializeMixinsUsesSettings, _emberCliMaterializeTemplatesComponentsMdLoader) {
  var Component = _ember['default'].Component;
  var computed = _ember['default'].computed;
  var A = _ember['default'].A;
  var htmlSafe = _ember['default'].String.htmlSafe;
  exports['default'] = Component.extend(_emberCliMaterializeMixinsUsesSettings['default'], {
    layout: _emberCliMaterializeTemplatesComponentsMdLoader['default'],

    classNameBindings: ['isBarType:progress:preloader-wrapper', 'active:active', 'size'],

    mode: null,
    percent: 0,
    size: null,
    active: true,
    color: null,

    init: function init() {
      this._super.apply(this, arguments);
      if (!this.get('mode')) {
        this.set('mode', this.get('_mdSettings.loaderMode'));
      }

      if (!this.get('size')) {
        this.set('size', this.get('_mdSettings.loaderSize'));
      }
    },

    isBarType: computed('mode', function () {
      return ['determinate', 'indeterminate'].indexOf(this.get('mode')) >= 0;
    }),

    isDeterminate: computed('mode', function () {
      return ['determinate'].indexOf(this.get('mode'));
    }),

    barStyle: computed('mode', 'percent', function () {
      if (this.get('mode') === 'determinate') {
        return htmlSafe('width: ' + parseInt(this.get('percent'), 10) + '%');
      } else {
        return htmlSafe('');
      }
    }),

    barClassName: computed('isBarType', 'mode', function () {
      return this.get('isBarType') ? this.get('mode') : null;
    }),

    spinnerClassNames: computed('color', 'isBarType', function () {
      if (!this.get('isBarType')) {
        var color = this.get('color');
        if (!color) {
          return A(['blue', 'red', 'green', 'yellow'].map(function (c) {
            return 'spinner-layer spinner-' + c;
          }));
        } else {
          return A(['spinner-layer spinner-' + color + '-only']);
        }
      } else {
        return A();
      }
    })
  });
});