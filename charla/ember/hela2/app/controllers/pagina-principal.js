import Ember from 'ember';

export default Ember.Controller.extend({
  pedidos:[{
    pino: "Feche",
    gusto1: "frutilla",
    gusto2: "chocolate"
  },
    {
      pino: "Sandro",
      gusto1: "crema del cielo",
      gusto2: ""
    }],
  mostrandoFormulario:false,
  actions:{
    mostrarFormulario(){
      this.set('mostrandoFormulario',true);
    },
    cerrarFormulario(){
      this.set('mostrandoFormulario',false);
    },
    agregarPedido(pedido){
      this.get('pedidos').pushObject({
        pino:pedido.pino,
        gusto1:pedido.gusto1,
        gusto2:pedido.gusto2
      });
    }
  }
});
