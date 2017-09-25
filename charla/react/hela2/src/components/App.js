import React, {Component} from 'react';
import {Link, Switch, Route} from 'react-router-dom'
import '../App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import PaginaPrincipal from './PaginaPrincipal'
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import PaginaLinkeada from './PaginaLinkeada';

class App extends Component {
    render() {
        return (
            <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
                <Switch>
                    <Route exact path="/" component={PaginaPrincipal}/>
                    <Route path="/unLink" component={PaginaLinkeada}/>
                </Switch>
            </MuiThemeProvider>
        );
    }
}

export default App;
