import React from 'react';
import Login from './Login';
import CommonActions from '../CommonActions';

class Navbar extends React.Component {
    render() {
       const { dispatch } = this.props;
        return (
                <nav className="navbar navbar-fixed-top navbar-inverse">
                  <div className="container">
                    <div className="navbar-header">
                      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                      </button>
                      <a className="navbar-brand" href="#">Project name</a>
                    </div>
                    <div id="navbar" className="collapse navbar-collapse">
                      <ul className="nav navbar-nav">
                        <li className="active"><a href="#">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#contact">Contact</a></li>
                        <li><Login  {...bindActionCreators(CommonActions, dispatch)} /></li>
                      </ul>
                    </div>
                  </div>
                </nav>
        );
    }
};

export default Navbar;