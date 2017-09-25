import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('formulario-de-pedido', 'Integration | Component | formulario de pedido', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{formulario-de-pedido}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#formulario-de-pedido}}
      template block text
    {{/formulario-de-pedido}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
