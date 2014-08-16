/** @jsx React.DOM */
var React = require('react');


var Grid = require('react-bootstrap').Grid;
var Row = require('react-bootstrap').Row;
var Col = require('react-bootstrap').Col;
var Table = require('react-bootstrap').Table;
var Modal = require('react-bootstrap').Modal;
var ModalTrigger = require('react-bootstrap').ModalTrigger;
var Button = require('react-bootstrap').Button;

var Map = require('./Map');
var styles = require('./styles');


var SongRequest = React.createClass({
    render: function() {
        return this.transferPropsTo(
            <Modal title="Request a song" animation={true}>
                <div className="modal-body">
                    <h4>Request a Song!</h4>
                    <p>Here is where you can request a song!</p>
                </div>
                <div className="modal-footer">
                    <Button onClick={this.props.onRequestHide}>Submit</Button>
                </div>
            </Modal>
        );
    }
});

var Venue = React.createClass({
    render: function() {
        // var googleMapHTML = '<script type="text/javascript" src="http://maps.google.com/maps/api/js?sensor=false"></script><div style="overflow:hidden;height:500px;width:600px;"><div id="gmap_canvas" style="height:500px;width:600px;"></div><style>#gmap_canvas img{max-width:none!important;background:none!important}</style><a class="google-map-code" href="http://www.map-embed.net" id="get-map-data">http://www.map-embed.net</a></div><script type="text/javascript"> function init_map(){var myOptions = {zoom:14,center:new google.maps.LatLng(38.5644614,-121.48330900000002),mapTypeId: google.maps.MapTypeId.ROADMAP};map = new google.maps.Map(document.getElementById("gmap_canvas"), myOptions);marker = new google.maps.Marker({map: map,position: new google.maps.LatLng(38.5644614, -121.48330900000002)});infowindow = new google.maps.InfoWindow({content:"<b>Vizcaya</b><br/>2019 21st St<br/>95818 New Sacremento" });google.maps.event.addListener(marker, "click", function(){infowindow.open(map,marker);});infowindow.open(map,marker);}google.maps.event.addDomListener(window, "load", init_map);</script>';
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
                    <Col md={3} >
                        <Row>
                            <Col md={6} style={center}>
                                <a href={url}>
                                    <img src="/static/images/viz.png" />
                                </a>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={6}>
                                <Row>
                                    Vizcaya
                                </Row>
                                <Row>
                                    2019 21st Street, Sacramento, CA 95818
                                </Row>
                                <Row>
                                    916.594.9285
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={6} >
                        <Row style={padding}>
                            <Col md={4} style={right} >
                                <b>Ceremony</b> 5:30 pm
                            </Col>
                            <Col md={8}>
                                Will be outdoors weather permitting so bring something to keep you warm in case it is chilly
                            </Col>
                        </Row>
                        <Row style={padding}>
                            <Col md={12} style={center}>
                                <b>Cocktails and hors d'oeuvres</b> to follow
                            </Col>
                        </Row>
                        <Row style={padding}>
                            <Col md={12} style={center}>
                                <b>Dinner and Dancing</b> 7:00pm - 11:00 in the pavilion
                            </Col>
                        </Row>

                    </Col>
                    <Col md={3} >
                        <Map latitude={38.5645001} longitude={-121.4835314} zoom={16} width={250} height={250} points={[{latitude:38.5645001,longitude:-121.4835314,title:"Vizcaya"}]} />
                    </Col>
                </Row>
            </Grid>
        );
    }
});


/*
<Row style={center} >
    <Col md={12} >
        <span>Know a good song to dance to?</span>
        <ModalTrigger modal={<SongRequest />} style={padding: '0px 10px 0px 10px'} >
            <Button>Click here</Button>
        </ModalTrigger>
        <span>to request one!</span>
    </Col>
</Row>
*/

module.exports = Venue;
