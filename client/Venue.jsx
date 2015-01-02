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
var routes = require('./routes');

var NOTES = 'static/images/notes.png';
var NOTES_STYLE = {
    width: '20px'
};

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
                                The ceremony will begin at 5:30 sharp. Guests may begin arriving at 5pm. It will take place outdoors on the east patio so bring something to keep you warm!
                            </Col>
                        </Row>
                        <Row style={padding}>
                            <Col md={12} xs={12} style={center}>
                                <b>Drinks and hors d'oeuvres</b> to follow
                            </Col>
                        </Row>
                        <Row style={{padding: '0px 0px 70px 0px'}}>
                            <Col md={12} xs={12} style={center}>
                                <b>Dinner and Dancing</b> 7:00pm - 11:00 in the pavilion
                            </Col>
                        </Row>
                        <Row style={{padding: '0px 0px 70px 0px'}}>
                            <Col md={12} xs={12} style={center}>
                                <i>We recommend grabbing a cab to get to the wedding, it should cost around $15 with tip. There is limited parking and this way the taxi driver can be your designated driver!</i>
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
