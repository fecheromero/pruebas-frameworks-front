import React, {Component} from 'react';
import TablaDePedidos from './TablaDePedidos';
import {RaisedButton, TextField, Card} from 'material-ui';
import {Row} from 'react-materialize'
import {Link} from 'react-router-dom'
import AgregarPedido from "./AgregarPedido";
export default class PanginaPrincipal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pedidos: [{
                pino: "Feche",
                gusto1: "frutilla",
                gusto2: "chocolate"
            },
                {
                    pino: "Sandro",
                    gusto1: "crema del cielo",
                    gusto2: ""
                }],
            mostrandoFormulario: false
        };
        this.mostrarFormulario = this.mostrarFormulario.bind(this);
        this.cerrarFormulario = this.cerrarFormulario.bind(this);
        this.agregarPedido = this.agregarPedido.bind(this);
    }

    mostrarFormulario() {
        this.setState((prevState) => ({
            mostrandoFormulario: true
        }));
    }

    cerrarFormulario() {
        this.setState((prevState) => ({
            mostrandoFormulario: false
        }));
    }

    formulario() {
        if (this.state.mostrandoFormulario) {
            return (
                <AgregarPedido
                    cerrarFormulario={this.cerrarFormulario}
                    agregarPedido={this.agregarPedido}/>
            )
        }
    }

    agregarPedido(pedido) {
        this.setState((prevState) => {
            var state = prevState;
            state.pedidos.push(pedido);
            return state;
        })
    }

    render() {
        return (
            <div className="PaginaPrincipal">
                <div className="container section">
                    <Row className="center-align">
                        <Link to='/unLink'><RaisedButton backgroundColor="darkcyan">Link </RaisedButton></Link>
                        <TablaDePedidos pedidos={this.state.pedidos}/>
                        <div className="right-align">
                            <RaisedButton backgroundColor="darkcyan"  onMouseDown={this.mostrarFormulario}>AGREGAR PEDIDO </RaisedButton>
                        </div>
                        {this.formulario()}
                    </Row>
                </div>
            </div>
        )
    }
}
