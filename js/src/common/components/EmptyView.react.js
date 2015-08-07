var React = require("react"),
    Router = require("react-router"),
    RouteHandler = Router.RouteHandler,
    Link = Router.Link;

module.exports = React.createClass({
  render: function() {
    return <div><RouteHandler /> <Link to="challenges">Challenges</Link>
</div>;
  }
});
