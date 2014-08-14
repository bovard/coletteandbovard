/** @jsx React.DOM */
var React = require('react');

var Grid = require('react-bootstrap').Grid;
var Row = require('react-bootstrap').Row;
var Col = require('react-bootstrap').Col;

var styles = require('./styles');

var Venue = React.createClass({
    render: function() {
        return (
            <Grid>
                <Row>
                    <Col md={12} >
                        <span style={styles.OXYGEN}>Ceremony and reception will be held at Vizcaya in Sacramento, CA.</span>
                    </Col>
                </Row>
                <Row>
                    <Col md={12} >
                        <span style={styles.OXYGEN}>The ceremony will begin at 5:30 in the garden (weather permitting). Immediately after will be a cocktail hour with hors d'oeuvres. Following will be a seated dinner in the pavilion... and most importantly DANCING! We look forward to celebrating with you!</span>
                    </Col>
                </Row>
            </Grid>
        );
    }
});

module.exports = Venue;
