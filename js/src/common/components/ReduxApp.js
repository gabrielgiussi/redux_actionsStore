import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { Connector } from 'redux/react';
// estan bien exportadas las acciones?
import * as CommonActions from '../CommonActions';

import ActionTrigger from './ActionTrigger';

class CasacasApp extends React.Component {

  constructor(){
    super();
	  this._beforeUnload = this._beforeUnload.bind(this);
  }

  render() {
    return (
      <Connector select={stores => ({ actions: stores.actions })}>
        {this.renderChild.bind(this)}
      </Connector>
    );
  }

  componentDidMount() {
    window.addEventListener('beforeunload', this._beforeUnload);
  }

  _beforeUnload(event) {
    if (this.actions.find((action) => action.ended() == false)){
      event.returnValue = "You have pending actions";
    }
    event.preventDefault();
  }

  renderChild({ actions, dispatch }) {
    this.actions = actions;
    let actionTypes = bindActionCreators(CommonActions, dispatch);
    let nextAction = actions.size;
        return (
          <div>
          <ActionTrigger message='ActionTrigger 1' nextAction={nextAction} actions={actions} actionTypes={actionTypes}/>
          <ActionTrigger message='ActionTrigger 2' nextAction={nextAction} actions={actions} actionTypes={actionTypes}/>
          </div>
        );
  }



};

export default CasacasApp;
