/** @jsx React.DOM */
var React = require('react');

var Nav = require('react-bootstrap').Nav;
var Navbar = require('react-bootstrap').Navbar;
var NavItem = require('react-bootstrap').NavItem;

var routes = require('./routes');

var MainNav = React.createClass({
    propTypes: {
        current: React.PropTypes.number.isRequired
    },
    render: function() {
        center = {
            'text-align': 'center'
        };
        fontStyle = {
            'font-family': "'Cinzel', serif"
        };
        return (
            <Navbar>
                <Nav activeKey={this.props.current} style={center}>
                    <NavItem key={1} href={"#" + routes.HOME}>
                        <span style={fontStyle}>Welcome</span>
                    </NavItem>
                    <NavItem key={2} href={"#" + routes.VENUE}>
                        <span style={fontStyle}>Venue</span>
                    </NavItem>
                    <NavItem key={4} href={"#" + routes.ACCOMMODATIONS}>
                        <span style={fontStyle}>Accommodations</span>
                    </NavItem>
                    <NavItem key={3} href={"#" + routes.REGISTRY}>
                        <span style={fontStyle}>Registry</span>
                    </NavItem>
                    <NavItem key={5} href={"#" + routes.RSVP}>
                        <span style={fontStyle}>RSVP</span>
                    </NavItem>
                    <NavItem key={6} href={"#" + routes.AMUSEMENTS}>
                        <span style={fontStyle}>Attractions</span>
                    </NavItem>
                </Nav>
            </Navbar>
        );
    }
});

module.exports = MainNav;
