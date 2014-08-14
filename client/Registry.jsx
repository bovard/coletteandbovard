/** @jsx React.DOM */
var React = require('react');

var Grid = require('react-bootstrap').Grid;
var Row = require('react-bootstrap').Row;
var Col = require('react-bootstrap').Col;

var styles = require('./styles');

var Registry = React.createClass({
    render: function() {
        var url = "http://www.bedbathandbeyond.com/store/giftregistry/view_registry_guest.jsp?pwsToken=&eventType=Wedding&registryId=541172983&pwsurl=";
        var padding = {
            padding: '0px 0px 20px 0px'
        };
        return (
            <Grid>
                <Row style={padding}>
                    <Col md={12}>
                        <span style={styles.OXYGEN}>We have registered at Bed Bath and Beyond. Click the logo below to view our registry.</span>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <a href={url} style={styles.CENTER}>
                            <img src="/static/images/BBB.jpg" />
                        </a>
                    </Col>
                </Row>
            </Grid>
        );
    }
});

module.exports = Registry;
