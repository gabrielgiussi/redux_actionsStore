import Immutable from 'immutable';
import { ALERT_START, ALERT_SUCCESS, ALERT_FAIL } from './ActionTypes';

var actions = Immutable.List();

export default function actionsStore(state = actions,action){
  switch (action.type) {
    case ALERT_START:
      if (state.includes(action.action)){
        state = state.update(action.action.id,(x) => { return x.load()});
      }
      else {
        state = state.push(action.action);
      }
      return state;
    case ALERT_SUCCESS:
      state = state.update(action.id,(x) => { return x.succeed()});
      return state;
    case ALERT_FAIL:
      state = state.update(action.id,(x) => {return x.fail()});
      return state;
    default:
      return state;

  }
}
