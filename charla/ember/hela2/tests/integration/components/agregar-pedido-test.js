import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('agregar-pedido', 'Integration | Component | agregar pedido', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{agregar-pedido}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#agregar-pedido}}
      template block text
    {{/agregar-pedido}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
