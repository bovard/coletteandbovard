/** @jsx React.DOM */
var React = require('react');
var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;

var Well = require('react-bootstrap').Well;

var MainNav = require('./MainNav');

var routes = require('./routes');

var InterfaceComponent = React.createClass({
    componentWillMount : function() {
        this.callback = (function() {
            this.forceUpdate();
        }).bind(this);

        this.props.router.on("route", this.callback);
    },
    componentWillUnmount : function() {
        this.props.router.off("route", this.callback);
    },
    render: function() {
        var nav = 0;
        var content;

        if (this.props.router.current[0] == routes.HOME) {
            nav = 1;
            var imgStyle = {
                width: "400px"
            }
            content = (
                <Well>
                    <p>Welcome!</p>
                    <img style={imgStyle} src="static/images/CAB.JPG" />
                </Well>
            );
        }
        if (this.props.router.current[0] == routes.VENUE) {
            nav = 2;
            content = (
                <Well>
                    <p>TODO: details/pictures of venue</p>
                </Well>
                );
        }
        if (this.props.router.current[0] == routes.REGISTRY) {
            nav = 3;
            content = (
                <Well>
                    <p>TODO: details/pictures of registry</p>
                </Well>
            );
        }
        if (this.props.router.current[0] == routes.ACCOMMODATIONS) {
            nav = 4;
            content = (
                <Well>
                    <h3>Hotel Information Coming Soon!</h3>
                </Well>
            );
        }
        if (this.props.router.current[0] == routes.RSVP) {
            nav = 5;
            content = (
                <Well>
                    <h3>RSVP!</h3>
                </Well>
                );
        }
        return (
            <div className="content">
                <MainNav current={nav} />
                <Well>
                    {content}
                </Well>
            </div>
        );
    }
});

var Router = Backbone.Router.extend({
    current: ['home'],
    routes: {
        '*actions': function(actions) {
            if (actions) {
                this.current = actions.split('/');
            } else {
                this.current = ["home"];
            }
        }
    },
});

var router = new Router();

React.renderComponent(
    <InterfaceComponent router={router} />,
    document.body
);

Backbone.history.start();