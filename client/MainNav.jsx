/** @jsx React.DOM */
var React = require('react');

var Nav = require('react-bootstrap').Nav;
var Navbar = require('react-bootstrap').Navbar;
var NavItem = require('react-bootstrap').NavItem;

var routes = require('./routes')

var MainNav = React.createClass({
    propTypes: {
        current: React.PropTypes.number.isRequired
    },
    render: function() {
        return (
            <Navbar>
                <Nav activeKey={this.props.current}>
                    <NavItem key={1} href={"#" + routes.HOME}>Home</NavItem>
                    <NavItem key={2} href={"#" + routes.VENUE}>Venue</NavItem>
                    <NavItem key={3} href={"#" + routes.REGISTRY}>Registry</NavItem>
                    <NavItem key={4} href={"#" + routes.ACCOMMODATIONS}>Accommodations</NavItem>
                </Nav>
            </Navbar>
        );
    }
});

module.exports = MainNav;
