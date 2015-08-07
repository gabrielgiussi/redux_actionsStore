import React from 'react';

export default class Login extends React.Component {
    constructor(props,context) {
      super(props, context);
        this.state = {
            username: '',
            password: ''
        };
    }


    onSubmit(e) {
      e.preventDefault();
      this.onLogin({username: this.state.username, password: this.state.password});
      this.setState({username: '',password:''});
    }

    _onChangeUsername(event) {
      this.setState({
        username: event.target.value
      });
    }

    _onChangePassword(event) {
      this.setState({
        password: event.target.value
      });
    }

    userLoggedIn() {
        //return this.getFlux().store("LoginStore").isLoggedIn();
    }
/*
    customRender: function () {
        return ( this.state.loading ? <label> Loading </label> :
        <form className="loginForm" onSubmit={this.onSubmit}>
            <input type="text" value={this.state.username} onChange={this._onChangeUsername} placeholder="Username"/>
            <input type="password" value={this.state.password} onChange={this._onChangePassword} placeholder="Password"/>
            <input type="submit" value="Login" />
        </form> :
        <button>Logout</button>
      );
    },*/

    render(){
            return ( this.state.loading ? <label> Loading </label> :
        <form className="loginForm" onSubmit={this.onSubmit}>
            <input type="text" value={this.state.username} onChange={this._onChangeUsername} placeholder="Username"/>
            <input type="password" value={this.state.password} onChange={this._onChangePassword} placeholder="Password"/>
            <input type="submit" value="Login" />
        </form>
            );
    }

};
