import React, { Component } from 'react';

export default class ActionTrigger extends Component {

  constructor(){
    super();
    this.watchAction = -1;
    this._onClick = this._onClick.bind(this);
    this._loading = this._loading.bind(this);
    this._onReclick = this._onReclick.bind(this);

  }

  render(){
    return (<div>
           <button onClick={this._onClick}>{this.props.message}</button>
           {this._loading()}
           </div>);
  }

  _onClick(dispatch){
    this.watchAction = this.props.nextAction;
    let message = this.props.message;
    this.props.actionTypes.alert({message: message},this.props.nextAction);
  }

  shouldComponentUpdate(nextProps, nextState){
    if (this.watchAction > -1){
      return this.props.actions.get(this.watchAction) !== nextProps.actions.get(this.watchAction);
    }
    return false;
  }

  _onReclick() {
    this.props.actionTypes.retrigger(this.watchAction);
  }

  _loading(){

    if (this.watchAction == -1){
      return null;
    }
    else {
      let action = this.props.actions.get(this.watchAction);
      if (!action.ended()){
        return <label>Loading action with id: {action.get('id')}</label>;
      }
      else {
        if (action.endedWithSuccess()){
          return <label>Action with id: {action.get('id')} succeded</label>;
        }
        return <button onClick={this._onReclick}>Retry {action.get('id')}!</button>;
      }
    }
  }

}
