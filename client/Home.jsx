/** @jsx React.DOM */
var React = require('react');

var Grid = require('react-bootstrap').Grid;
var Row = require('react-bootstrap').Row;
var Col = require('react-bootstrap').Col;
var Panel = require('react-bootstrap').Panel;
var Carousel = require('react-bootstrap').Carousel;
var CarouselItem = require('react-bootstrap').CarouselItem;

var ONE = "static/images/CAB.JPG";
var TWO = "static/images/CAB2.JPG";

var Home = React.createClass({
    getInitialState: function() {
        return {
            left: false,
            right: false
        };
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
                    <Col md={2} xs={2}>
                        <Row>
                            <img style={{width: '100%'}} src="static/images/COWGIRL.JPG" />
                        </Row>
                        <Row>
                            <img style={{width: '100%'}} src="static/images/SHOOTING.JPG" />
                        </Row>
                    </Col>
                    <Col md={8} xs={8}>
                        <Carousel>
                            <CarouselItem>
                                <img width={900} height={500} alt="900x500" src="/static/images/CAR/CAB.JPG"/>
                            </CarouselItem>
                            <CarouselItem>
                                <img width={900} height={500} alt="900x500" src="/static/images/CAR/BREW.JPG"/>
                            </CarouselItem>
                            <CarouselItem>
                                <img width={900} height={500} alt="900x500" src="/static/images/CAR/COUCH2.png"/>
                            </CarouselItem>
                            <CarouselItem>
                                <img width={900} height={500} alt="900x500" src="/static/images/CAR/WEDDING2.jpg"/>
                            </CarouselItem>
                            <CarouselItem>
                                <img width={900} height={500} alt="900x500" src="/static/images/CAR/FLOWER2.png"/>
                            </CarouselItem>
                            <CarouselItem>
                                <img width={900} height={500} alt="900x500" src="/static/images/CAR/HAIR2.png"/>
                            </CarouselItem>
                            <CarouselItem>
                                <img width={900} height={500} alt="900x500" src="/static/images/CAR/OCEAN2.png"/>
                            </CarouselItem>
                            <CarouselItem>
                                <img width={900} height={500} alt="900x500" src="/static/images/CAR/USPA.JPG"/>
                            </CarouselItem>
                            <CarouselItem>
                                <img width={900} height={500} alt="900x500" src="/static/images/CAR/UP.JPG"/>
                            </CarouselItem>
                            <CarouselItem>
                                <img width={900} height={500} alt="900x500" src="/static/images/CAR/WEDDING.JPG"/>
                            </CarouselItem>
                            <CarouselItem>
                                <img width={900} height={500} alt="900x500" src="/static/images/CAR/YELLOWSTONE.JPG"/>
                            </CarouselItem>
                        </Carousel>
                    </Col>
                    <Col md={2} xs={2}>
                        <Row>
                            <img style={{width: '100%'}} src="static/images/BN.JPG" />
                        </Row>
                        <Row>
                            <img style={{width: '100%'}} src="static/images/GLASS.JPG" />
                        </Row>
                    </Col>
                </Row>
            </Grid>
            );
    }
});

module.exports = Home;
