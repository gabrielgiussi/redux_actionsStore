// Third-party Modules
var React = require('react'),
    Fluxxor = require('fluxxor'),
    Router = require("react-router"),
    objectAssign = require('object-assign'),
    keyMirror = require('keymirror');

// Components
var Login = require('./components/Login.react'),
    CasacasApp = require('./components/CasacasApp.react'),
    EmptyView = require('./components/EmptyView.react'),
    Footer = require('./components/Footer.react'),
    Navbar = require('./components/Navbar.react');



var Casacas = {
    // Third-party Modules
    React : React,
    Fluxxor : Fluxxor,
    Router : Router,
    objectAssign : objectAssign,
    keyMirror : keyMirror,

    // Utils
    RouteHandler : RouteHandler,
    Link : Link,

    // Stores
    LoginStore : LoginStore,

    // Mixins
    SecurityMixin : SecurityMixin,
    FluxMixin : FluxMixin,
    StoreWatchMixin : StoreWatchMixin,


    // Actions

    // Components
    ChallengeForm : ChallengeForm,
    Challenge : Challenge,
    ChallengeList : ChallengeList,
    Contender : Contender,
    ContenderForm : ContenderForm,
    ContenderList : ContenderList,
    Login : Login,
    CasacasApp : CasacasApp,
    EmptyView : EmptyView,
    Footer : Footer,
    Navbar : Navbar

};

module.exports = Casacas;
