/** @jsx React.DOM */
var React = require('react');

var Grid = require('react-bootstrap').Grid;
var Row = require('react-bootstrap').Row;
var Col = require('react-bootstrap').Col;

var styles = require('./styles');

var Registry = React.createClass({
    render: function() {
        var url = "http://www.bedbathandbeyond.com/store/giftregistry/view_registry_guest.jsp?pwsToken=&eventType=Wedding&registryId=541172983&pwsurl=";
        var amazonURL = "http://www.amazon.com/registry/wedding/1NSZR045R60IT";
        var padding = {
            padding: '0px 0px 20px 0px'
        };
        return (
            <Grid>
                <Row style={padding}>
                    <Col md={12}>
                        <span style={styles.OXYGEN}><b>Please have any gifts shipped</b> since we will also be traveling via plane to the wedding celebration. If you need our address for shipping reasons please click <a href="/#question">here</a> and we will get it to you as soon as possible!</span>
                    </Col>
                </Row>
                <Row style={padding}>
                    <Col md={6} xs={12}>
                        <a href={url} style={styles.CENTER}>
                            <img src="/static/images/3B.jpg" />
                        </a>
                    </Col>
                    <Col md={6} xs={12}>
                        <a href={amazonURL} style={styles.CENTER}>
                            <img src="/static/images/amazon.png" />
                        </a>
                    </Col>
                </Row>
                <Row style={padding}>
                    <Col md={12}>
                        <span style={styles.OXYGEN}>Click the logos above to view our Bed Bath &amp; Beyond or Amazon registries.</span>
                    </Col>
                </Row>
                <Row style={padding}>
                    <Col md={12}>
                        <span style={styles.OXYGEN}>Both Bed, Bath &amp; Beyond and Amazon should offer free shipping for wedding gifts.</span>
                    </Col>
                </Row>
            </Grid>
        );
    }
});

module.exports = Registry;
