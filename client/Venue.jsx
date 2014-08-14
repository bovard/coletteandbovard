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
                        Ceremony and reception will be held at Vizcaya in Sacramento, CA.
                    </Col>
                    <Col md={12} >
                        The ceremony will begin at 5:30 in the garden (weather permitting). Immediately after will be a cocktail hour with hors d'oeuvres. Following will be a seated dinner in the pavilion... and most importantly DANCING! We look forward to celebrating with you!
                    </Col>
                </Row>
            </Grid>
        );
    }
});

module.exports = Venue;
