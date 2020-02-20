import React, { Component } from 'react';
import { Switch, BrowserRouter, Route } from "react-router-dom";
import './App.css';
import { Provider } from "react-redux";
import storePath from "./store";
import Home from "./home";
import NextPage from './next';
import ErrorPage from './error';

export default class App extends Component {
  render() {
    return (
      <Provider store={storePath}>
        <BrowserRouter>
          <Switch>
            <Route path='/' component={Home} exact />
            <Route path = '/next' component={NextPage} />
            <Route component={ErrorPage} />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }

}

