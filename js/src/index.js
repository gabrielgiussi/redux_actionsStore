/*var challenges = require('./challenges');


var React = require('react');
var CasacasApp = require('./common/components/CasacasApp.react');
var Fluxxor = require('fluxxor');
var objectAssign = require('object-assign');

//var ChallengeStore = require('./challenges/ChallengeStore');
var ChallengeStore = challenges.ChallengeStore;
var ContenderStore = require('./contenders/ContenderStore');
var LoginStore = require('./common/LoginStore');

var challengeActions = challenges.challengeActions;
var contenderActions = require('./contenders/ContenderActions');
var commonActions = require('./common/CommonActions');

var Router = require("react-router");
var routes = require("./router");

var router = Router.create({routes: routes});

var actions = objectAssign(challengeActions,contenderActions,commonActions);

var stores = {
  ChallengeStore: new ChallengeStore(),
  ContenderStore: new ContenderStore(),
  LoginStore: new LoginStore()
};

var flux = new Fluxxor.Flux(stores, actions);

flux.on("dispatch", function(type, payload) {
  if (console && console.log) {
    console.log("[Dispatch]", type, payload);
  }
});

//React.render(
//<CasacasApp flux={flux}/>,
//document.getElementById('casacasapp')
//);

Router.run(routes, function(Handler) {
  React.render(
    <Handler flux={flux} />,
    document.getElementById("casacasapp")
  );
});
*/
/*
import CasacasApp from './common/index.js';
import React, { Component } from 'react';
import CounterApp from './CounterApp';
import { createRedux, bindActionCreators } from 'redux';
import { Provider, connect } from 'redux/react';
import * as stores from '../stores';
import Counter from '../components/Counter';
import * as CounterActions from '../actions/CounterActions';

@connect(state => ({
  counter: state.counter
}))
class CasacasApp extends Component {
  render() {
    const { dispatch } = this.props;
    return (
      <Counter {...bindActionCreators(CounterActions, dispatch)} />
    );
  }
}


const redux = createRedux(stores);

export default class App extends Component {
  render() {
    return (
      <Provider redux={redux}>
        {() => <CasacasApp />}
      </Provider>
    );
  }
}
*/

import React from 'react';
import App from './common/App';

React.render(<App/>,document.getElementById('casacasapp'));
