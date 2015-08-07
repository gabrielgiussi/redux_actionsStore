import Immutable from 'immutable';

export default class Action extends Immutable.Record({state: 'idle', api: null, type: null, payload: null, id: null}){
  load(){
    return this.set('state','loading');
  }

  succeed(){
    return this.set('state','succeeded');
  }

  fail(){
    return this.set('state','failed');
  }

  ended(){
    return this.get('state') != 'loading' && this.get('state') != 'idle';
  }

  endedWithSuccess(){
    return this.get('state') == 'succeeded';
  }

  endedWithFailure(){
    return this.get('state') == 'failed';
  }

  trigger() {
    return (dispatch) => {
      dispatch({type: this.get('type') + '_START', action: this});
      let payload = this.get('payload');
      this.get('api').call({dispatch,payload}).then((result) => {
        dispatch({type: this.get('type') + '_SUCCESS',id: this.get('id'), result: result.result});
      }).catch((result) => {
	      dispatch({type: this.get('type') + '_FAIL',id: this.get('id'), result: result.result});
	    });
    }
  }
}
