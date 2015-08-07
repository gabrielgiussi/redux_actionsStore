var LoginStore = require('./LoginStore');

var SecurityMixin = {
    componentWillMount: function() {
        //this.userLoggedIn = LoginStore.isLoggedIn;
        //this.userLoggedIn = true;
    },

    shouldComponentUpdate: function () {
        //this.userLoggedIn = LoginStore.isLoggedIn;
        return true;
    },

    render: function(){
        return this.userLoggedIn() ? this.loggedInRender() : this.anonymousRender();
    }
};

module.exports = SecurityMixin;
