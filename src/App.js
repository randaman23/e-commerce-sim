import React, { Component } from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom'
import Cart from './components/Cart'
import Home from './components/Home'
import Products from './components/Products'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <HashRouter>
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/cart" component={Cart}/>
            <Route path="/products" component={Products}/>
          </Switch>
        </HashRouter>
      </div>
    );
  }
}

export default App;
