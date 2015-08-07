import { LOGIN, LOGIN_SUCCESS, LOGIN_FAIL } from './ActionTypes';
import Immutable from 'immutable';

class LoginContext extends Immutable.Record({ logged : false, loading: false, error: false, user: null}){
  loggedIn() {
    return this.withMutations(function (loginContext){
      loginContext.set('logged','true').set('error','false').set('loading','false');
    });
  }

  loggedOut() {
    return this.withMutations(function (loginContext){
      loginContext.set('logged','false').set('error','false').set('loading','false');
    });
  }

  login() {
    return this.set('loading','true');
  }

  error() {
    return this.set('error','true');
  }

}

var loginContext = new LoginContext();


export default function loginStore(state = loginContext,action){
  switch (action.type) {
    case LOGIN:
      state = state.login();
    case LOGIN_SUCCESS:
      state = state.loggedIn();
    case LOGIN_FAIL:
      state = state.error();
    default:
      return state;

  }
}
/*
var LoginStore = Fluxxor.createStore({
  initialize: function() {
    this.user = null;
    this.error = '';
    this.loading = false;

    this.bindActions(
      constants.LOGIN, this.onLogin,
      constants.LOGIN_SUCCESS, this.onLoginSuccess,
      constants.LOGIN_FAIL, this.onLoginFail
    );
  },

  onLoginSuccess: function(user) {
    this.user = user;
    this.error = null;
    this.loading = false;
    this.emit("change");
  },

  onLogin: function () {
    this.loading = true;
    this.emit("change");
  },

  onLoginFail: function(error) {
    this.error = error;
    this.loading = false;
    this.emit("change");
  },

  getState: function() {
    // TODO
  },

  isLoggedIn: function(){
    return this.user != null;
  }
});

module.exports = LoginStore;
*/
