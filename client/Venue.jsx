/** @jsx React.DOM */
var React = require('react');

var Grid = require('react-bootstrap').Grid;
var Row = require('react-bootstrap').Row;
var Col = require('react-bootstrap').Col;

var Venue = React.createClass({
    render: function() {
        var carStyle = {
            height: "500px",
            width: "900px",
            'text-align': "center"
        };
        return (
            <Grid>
                <Row>
                    <Col md={12} >


                    </Col>
                </Row>
            </Grid>
        );
    }
});

module.exports = Venue;
