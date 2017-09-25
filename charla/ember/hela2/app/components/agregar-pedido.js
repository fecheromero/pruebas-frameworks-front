import Ember from 'ember';

export default Ember.Component.extend({

  gustos:["Chocolate","Frutilla","Limon","Crema del cielo"],
  pedido:{
    pino:""
  },
  actions:{
    HandlerGusto1(gusto){
      this.set('pedido.gusto1',gusto);
    },
    HandlerGusto2(gusto){
      this.set('pedido.gusto2',gusto);
    }
  }
});
