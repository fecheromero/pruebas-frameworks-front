define('ember-cli-materialize/components/md-range', ['exports', 'ember', 'ember-cli-materialize/templates/components/md-range'], function (exports, _ember, _emberCliMaterializeTemplatesComponentsMdRange) {
  var Component = _ember['default'].Component;
  exports['default'] = Component.extend({
    layout: _emberCliMaterializeTemplatesComponentsMdRange['default'],
    classNames: ['md-range'],
    min: 0,
    max: 100,
    step: 1
  });
});