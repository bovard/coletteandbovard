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
                            Colette is very smart, funny and beautiful! Colette is very smart, funny and beautiful!
                        </Panel>
                    </Col>
                    <Col md={5}  mdOffset={2} >
                        <Panel header={<h3>Him</h3>}>
                            Bovard was born in Bermuda! Bovard was born in Bermuda! Bovard was born in Bermuda!
                        </Panel>
                    </Col>
                </Row>
            </Grid>
        );
    }
});

module.exports = Home;
