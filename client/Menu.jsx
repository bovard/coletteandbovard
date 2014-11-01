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
                    <Col md={3} xs={3}>
                        <Row>
                            <a href={url}>
                                <img width={"80%"} src="/static/images/viz.png" />
                            </a>
                        </Row>
                        <Row>
                            <Row>
                            Vizcaya
                            </Row>
                            <Row>
                            2019 21st Street
                            </Row>
                            <Row>
                            Sacramento, CA 95818
                            </Row>
                            <Row>
                            916.594.9285
                            </Row>
                        </Row>
                    </Col>
                    <Col md={6} xs={6} >
                        <Row style={padding}>
                            <Col md={4} xs={4} style={right} >
                                <b>Ceremony</b> 5:00 pm
                            </Col>
                            <Col md={8} xs={8}>
                            The ceremony will begin at 5:30 sharp. Guests may begin arriving at 5pm. It will take place outdoors on the east patio (weather permitting) so bring something to keep you warm in case it is chilly
                            </Col>
                        </Row>
                        <Row style={padding}>
                            <Col md={12} xs={12} style={center}>
                                <b>Cocktails and hors d'oeuvres</b> to follow
                            </Col>
                        </Row>
                        <Row style={{padding: '0px 0px 70px 0px'}}>
                            <Col md={12} xs={12} style={center}>
                                <b>Dinner and Dancing</b> 7:00pm - 11:00 in the pavilion
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12} xs={12} style={center}>
                                <img src={NOTES} style={NOTES_STYLE} />  <i>Know a good song to dance to? Click <a href={'#' + routes.SONG_REQUEST} >here</a> to request a song!</i>  <img src={NOTES} style={NOTES_STYLE} />
                            </Col>
                        </Row>

                    </Col>
                    <Col md={3} xs={3} >
                        <Map latitude={38.5645001} longitude={-121.4835314} zoom={16} width={250} height={250} points={[{latitude:38.5645001,longitude:-121.4835314,title:"Vizcaya"}]} />
                    </Col>
                </Row>
            </Grid>
            );
    }
});


module.exports = Menu;
