/** @jsx React.DOM */
var React = require('react');
var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;

var Well = require('react-bootstrap').Well;
var Grid = require('react-bootstrap').Grid;
var Row = require('react-bootstrap').Row;
var Col = require('react-bootstrap').Col;

var MainNav = require('./MainNav');
var Home = require('./Home');
var Venue = require('./Venue');
var Registry = require('./Registry');
var Song = require('./Song');
var Question = require('./Question');

var routes = require('./routes');
var styles = require('./styles');

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
            };
            content = (
                <Home />
            );
        }
        if (this.props.router.current[0] == routes.VENUE) {
            nav = 2;
            content = (
                <Venue />
            );
        }
        if (this.props.router.current[0] == routes.REGISTRY) {
            nav = 3;
            content = (
                <Registry />
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
        /*
        if (this.props.router.current[0] == routes.RSVP) {
            nav = 5;
            content = (
                <Well>
                    <h3>Coming Soon!</h3>
                </Well>
                );
        }
        */
        if (this.props.router.current[0] == routes.AMUSEMENTS) {
            nav = 6;
            content = (
                <Well>
                    <h3>Coming Soon!</h3>
                </Well>
                );
        }
        if (this.props.router.current[0] == routes.QUESTION) {
            content = (
                <Question />
            );
        }
        if (this.props.router.current[0] == routes.SONG_REQUEST) {
            content = (
                <Song />
            );
        }

        var center = {
            'text-align': 'center'
        };
        var cursive = {
            "font-family": "'Gloria Hallelujah', cursive"
        };

        var imageStyle = {
            position: 'relative',
            width: '100%'
        };
        var headingStyle = {
            position: 'absolute',
            top: '0px',
            'text-align': 'center',
            width: '100%'
        };
        return (
            <div className="content">
                <div>
                    <img style={imageStyle} src="/static/images/MTN2.jpg" />
                    <div style={headingStyle}>
                        <Grid>
                            <Row>
                                <Col md={12} xs={5} style={{'text-align': 'center'}} >
                                    <h2 style={styles.HEADING}>Colette &amp; Bovard</h2>
                                </Col>
                                <Col md={12} xs={2} style={{'text-align': 'center'}} >
                                    <h2 style={styles.HEADING}>2.28.15</h2>
                                </Col>
                                <Col md={12} xs={5} style={{'text-align': 'center'}} >
                                    <h2 style={styles.HEADING}>Sacramento, CA</h2>
                                </Col>
                            </Row>
                        </Grid>
                    </div>
                </div>
                <MainNav current={nav} />
                <Well>
                    {content}
                </Well>
                <div style={center}>
                    <img width={'50px'} src="/static/images/UPDOWN.JPG" />
                </div>
                <div style={center}>
                    <span style={cursive}>made by the groom and bride</span>
                </div>
                <div style={center}>
                    <span style={cursive}>but really, who has the computer skills? :)</span>
                </div>
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