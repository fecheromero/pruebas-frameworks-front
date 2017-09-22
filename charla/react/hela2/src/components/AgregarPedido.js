import React, {Component} from 'react';
import {Card, FloatingActionButton, MenuItem, RaisedButton, SelectField, TextField} from "material-ui";
import injectTapEventPlugin from "react-tap-event-plugin";
import {ContentClear} from "material-ui/svg-icons/index";

injectTapEventPlugin();
export default class AgregarPedido extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pino: "",
        };

    }

    handleChangeGusto1 = (event, index, value) => this.setState({gusto1: value});
    handleChangeGusto2 = (event, index, value) => this.setState({gusto2: value});
    handleChangePino = (event, value) => {
        this.setState({pino: value})
    };


    render() {
        return (
            <div className="agregarpedido">
                <div className="section">


                    <div className="left-align">
                        <Card>
                            <div className="right-align">
                                <FloatingActionButton onMouseDown={this.props.cerrarFormulario} mini={true}>
                                    <ContentClear />
                                </FloatingActionButton>
                                <div className="center-align">
                                    <h3>Nuevo pedido</h3>
                                </div>
                            </div>
                            <div className="col s4">
                                <TextField floatingLabelText="Pino" value={this.state.pino}
                                           onChange={this.handleChangePino}/>
                            </div>
                            <div className="col s4">
                                <SelectField
                                    floatingLabelText="Helado"
                                    value={this.state.gusto1}
                                    onChange={this.handleChangeGusto1}
                                >
                                    <MenuItem value={"Chocolate"} primaryText="Chocolate"/>
                                    <MenuItem value={"Frutilla"} primaryText="Frutilla"/>
                                    <MenuItem value={"Crema del cielo"} primaryText="Crema del cielo"/>
                                    <MenuItem value={"Limon"} primaryText="Limon"/>
                                </SelectField>
                            </div>
                            <div className="col s4">
                                <SelectField
                                    floatingLabelText="Helado"
                                    value={this.state.gusto2}
                                    onChange={this.handleChangeGusto2}
                                >
                                    <MenuItem value={"Chocolate"} primaryText="Chocolate"/>
                                    <MenuItem value={"Frutilla"} primaryText="Frutilla"/>
                                    <MenuItem value={"Crema del cielo"} primaryText="Crema del cielo"/>
                                    <MenuItem value={"Limon"} primaryText="Limon"/>
                                </SelectField>
                            </div>
                            <br/>
                            <div className=" right-align">
                                <RaisedButton backgroundColor="darkcyan" onMouseDown={()=>this.props.agregarPedido(this.state)} >AGREGAR  </RaisedButton>
                            </div>
                        <br/>
                        </Card>
                    </div>
                </div>
                <iframe src="http://192.168.1.92:3000" />
            </div>
        )
    }
}
