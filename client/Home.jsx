/** @jsx React.DOM */
var React = require('react');

var Grid = require('react-bootstrap').Grid;
var Row = require('react-bootstrap').Row;
var Col = require('react-bootstrap').Col;
var Panel = require('react-bootstrap').Panel;

var ONE = "static/images/CAB.JPG";
var TWO = "static/images/CAB2.JPG";

var Home = React.createClass({
    getInitialState: function() {
        return {
            left: false,
            right: false
        };
    },
    enterLeft: function() {
        this.setState({left: true});
    },
    exitLeft: function() {
        this.setState({left: false});
    },
    enterRight: function() {
        this.setState({right: true});
    },
    exitRight: function() {
        this.setState({right: false});
    },
    render: function() {
        var imgStyle = {
            width: "100%",
            padding: "10px 0px 20px 0px"
        };
        var hidden = {
            width: "100%",
            padding: "10px 0px 20px 0px",
            display: 'none'
        };
        return (
            <Grid>
                <Row className="show-grid">
                    <Col md={5} onMouseEnter={this.enterLeft} onMouseLeave={this.exitLeft} >
                        <img style={this.state.left ? hidden : imgStyle} src={ONE} />
                        <img style={this.state.left ? imgStyle : hidden} src={TWO} />
                    </Col>
                    <Col md={5} mdOffset={2} onMouseEnter={this.enterRight} onMouseLeave={this.exitRight} >
                        <img style={this.state.right ? hidden : imgStyle} src={ONE} />
                        <img style={this.state.right ? imgStyle: hidden} src={TWO} />
                    </Col>
                    <Col md={5}  >
                        <Panel header={<h3>Her</h3>}>
                        </Panel>
                    </Col>
                    <Col md={5}  mdOffset={2} >
                        <Panel header={<h3>Him</h3>}>
                        </Panel>
                    </Col>
                </Row>
            </Grid>
        );
    }
});

module.exports = Home;
