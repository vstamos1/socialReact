import React, { Component } from 'react';
import {BrowserRouter as Router, Route,Switch}from 'react-router-dom';
import './App.css';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import CreateMuiTheme from '@material-ui/core/styles/createMuiTheme'
//Pages

import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

import Navbar from './components/Navbar';


const theme = CreateMuiTheme({
  palette: {
    primary: {
      main: '#1f76a2',
    },
    secondary: {
      main: '#546e7a',
    },
  },
})
class App extends Component {
  render(){

  return (
    <MuiThemeProvider theme={theme}>
    <div className="App">
      <Router>
        <Navbar/>
        <div className="container">
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/signup' component={SignUp}/>
          <Route exact path='/login' component={Login}/>
        </Switch>
        </div>
      </Router>
    </div>
    </MuiThemeProvider>
  );
  }
}
  
export default App;
