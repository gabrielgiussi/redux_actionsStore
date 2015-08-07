import { ALERT_START, ALERT_SUCCESS, ALERT_FAIL } from './ActionTypes';
import SecurityWebAPI from "./SecurityWebAPI";
import AlertAPI from "./AlertAPI";
// https://github.com/gaearon/redux/issues/99#issuecomment-112212639

import Action from './Action';

export function login(payload,id){
  var action = new Action({payload: payload,id: id, type: LOGIN_START, api: SecurityWebAPI});
  return action.trigger();
}

export function alert(payload,id){
  var action = new Action({payload: payload,id: id, type: 'ALERT', api: AlertAPI});
  return action.trigger();
}

export function retrigger(id){
  return (dispatch,getState) => {
    dispatch(getState().actions.get(id).trigger());
  };
}
