/** @jsx React.DOM */
var React = require('react');


var Grid = require('react-bootstrap').Grid;
var Row = require('react-bootstrap').Row;
var Col = require('react-bootstrap').Col;
var Table = require('react-bootstrap').Table;

var Map = require('./Map');
var styles = require('./styles');


var Venue = React.createClass({
    render: function() {
        // var googleMapHTML = '<script type="text/javascript" src="http://maps.google.com/maps/api/js?sensor=false"></script><div style="overflow:hidden;height:500px;width:600px;"><div id="gmap_canvas" style="height:500px;width:600px;"></div><style>#gmap_canvas img{max-width:none!important;background:none!important}</style><a class="google-map-code" href="http://www.map-embed.net" id="get-map-data">http://www.map-embed.net</a></div><script type="text/javascript"> function init_map(){var myOptions = {zoom:14,center:new google.maps.LatLng(38.5644614,-121.48330900000002),mapTypeId: google.maps.MapTypeId.ROADMAP};map = new google.maps.Map(document.getElementById("gmap_canvas"), myOptions);marker = new google.maps.Marker({map: map,position: new google.maps.LatLng(38.5644614, -121.48330900000002)});infowindow = new google.maps.InfoWindow({content:"<b>Vizcaya</b><br/>2019 21st St<br/>95818 New Sacremento" });google.maps.event.addListener(marker, "click", function(){infowindow.open(map,marker);});infowindow.open(map,marker);}google.maps.event.addDomListener(window, "load", init_map);</script>';
        var padding = {
            padding: '0px 0px 30px 0px'
        };
        return (
            <Grid style={styles.OXYGEN}>
                <Row style={padding} >
                    <Col md={6} >
                        <Row>
                            <Col md={6} >
                                <a herf="http://vizcayasacramento.com/" >
                                    <img src="/static/images/viz.png" />
                                </a>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={6}>
                                Vizcaya
                                2019 21st Street, Sacramento, CA 95818
                                Ph: 916.594.9285
                                Frontdesk@Vizcayasacramento.com
                            </Col>
                        </Row>
                    </Col>
                    <Col md={6} >
                        <Table striped bordered condensed hover>
                            <thead>
                                <tr>
                                    <th>Activity</th>
                                    <th>Time</th>
                                    <th>Details</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Ceremeony</td>
                                    <td>5:30 pm</td>
                                    <td>Will be outdoors if possible</td>
                                </tr>
                                <tr>
                                    <td>Cocktails</td>
                                    <td>6:00 pm</td>
                                    <td>Yummy drinks!</td>
                                </tr>
                                <tr>
                                    <td>Dinner</td>
                                    <td>6:30 pm</td>
                                    <td>Bon Apetit!</td>
                                </tr>
                                <tr>
                                    <td>Cake!</td>
                                    <td>7:30 pm</td>
                                    <td>A special treat to share with you</td>
                                </tr>
                                <tr>
                                    <td>Non-optional dancing!</td>
                                    <td>8:30 pm - ?</td>
                                    <td>Bring your dancing shoes!</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                </Row>
                <Row>

                    <Col md={6} >
                        <span style={styles.OXYGEN}>The ceremony will begin at 5:30 in the garden (weather permitting). Immediately after will be a cocktail hour with hors d'oeuvres. Following will be a seated dinner in the pavilion... and most importantly DANCING! We look forward to celebrating with you!</span>
                    </Col>
                    <Col md={6} >
                        <Map latitude={38.5645001} longitude={-121.4835314} zoom={16} width={250} height={250} points={[{latitude:38.5645001,longitude:-121.4835314,title:"Vizcaya"}]} />
                    </Col>
                </Row>
            </Grid>
        );
    }
});

module.exports = Venue;
