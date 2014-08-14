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
            left: ONE,
            right: ONE
        }
    },
    enterLeft: function() {
        this.setState({left: TWO});
    },
    exitLeft: function() {
        this.setState({left: ONE});
    },
    enterRight: function() {
        this.setState({right: TWO});
    },
    exitRight: function() {
        this.setState({right: ONE});
    },
    render: function() {
        var imgStyle = {
            width: "100%",
            padding: "10px 0px 20px 0px"
        };
        return (
            <Grid>
                <Row className="show-grid">
                    <Col md={5} onMouseEnter={this.enterLeft} onMouseLeave={this.exitLeft} >
                        <img style={imgStyle} src={this.state.left} />
                    </Col>
                    <Col md={5} mdOffset={2} onMouseEnter={this.enterRight} onMouseLeave={this.exitRight} >
                        <img style={imgStyle} src={this.state.right} />
                    </Col>
                    <Col md={5}  >
                        <Panel header={<h3>Her</h3>}>
                            Hi my name is Colette and I love this guy
                        </Panel>
                    </Col>
                    <Col md={5}  mdOffset={2} >
                        <Panel header={<h3>Him</h3>}>
                            Hi my name is Bovard and I love her
                        </Panel>
                    </Col>
                </Row>
            </Grid>
        );
    }
});

module.exports = Home;
