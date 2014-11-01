/** @jsx React.DOM */
var React = require('react');


var Grid = require('react-bootstrap').Grid;
var Row = require('react-bootstrap').Row;
var Col = require('react-bootstrap').Col;
var Table = require('react-bootstrap').Table;
var Button = require('react-bootstrap').Button;

var styles = require('./styles');
var routes = require('./routes');

var NOTES = 'static/images/notes.png';
var NOTES_STYLE = {
    width: '20px'
};

var Menu = React.createClass({
    render: function() {
        var url = "http://vizcayasacramento.com/";
        var padding = {
            padding: '0px 0px 30px 0px'
        };
        var center = {
            'text-align': 'center'
        };
        var right = {
            'text-align': 'right'
        };
        return (
            <Grid style={styles.OXYGEN}>
                <Row>
                    <Col md={6} mdOffset={3} xs={12} >
                        <Row style={padding}>
                            <Col md={4} xs={4} style={right} >
                                <b>Vegetarian </b>
                            </Col>
                            <Col md={8} xs={8}>
                                 <b>Eggplant Napoleon</b> Eggplant, Roasted Red Bell Peppers and Zucchini, fresh Buffalo Mozzarella
                            </Col>
                        </Row>
                        <Row style={padding}>
                            <Col md={4} xs={4} style={right} >
                                <b>Chicken</b>
                            </Col>
                            <Col md={8} xs={8}>
                                <b>Roasted Breast of Chicken</b> with Lemon and Thyme
                            </Col>
                        </Row>
                        <Row style={padding}>
                            <Col md={4} xs={4} style={right} >
                                <b>Beef</b>
                            </Col>
                            <Col md={8} xs={8}>
                                <b>Horseradish Crusted Beef Sirloin </b> with Garlic and Thyme Butter
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12} xs={12} style={center}>
                                There will be a kids meal available for children ages 3-12 <br />
                                (Chicken fingers, french fries, and fruit) <br />
                                (Please indicate on your RSVP card if you need any kid's meals)
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Grid>
            );
    }
});


module.exports = Menu;
