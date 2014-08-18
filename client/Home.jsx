/** @jsx React.DOM */
var React = require('react');

var Grid = require('react-bootstrap').Grid;
var Row = require('react-bootstrap').Row;
var Col = require('react-bootstrap').Col;
var Panel = require('react-bootstrap').Panel;
var Carousel = require('react-bootstrap').Carousel;
var CarouselItem = require('react-bootstrap').CarouselItem;

var routes = require('./routes');
var styles = require('./styles');

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
                <Row>
                    <Col md={2} xs={1}>
                        <Row>
                            <img style={{width: '100%', padding: '0px 0px 100px 0px'}} src="static/images/COWGIRL.JPG" />
                        </Row>
                        <Row>
                            <img style={{width: '100%'}} src="static/images/SHOOTING.JPG" />
                        </Row>
                    </Col>
                    <Col md={8} xs={10}>
                        <Carousel>
                            <CarouselItem>
                                <img width={900} height={500} alt="900x500" src="/static/images/CAR/CAB.JPG"/>
                            </CarouselItem>
                            <CarouselItem>
                                <img width={900} height={500} alt="900x500" src="/static/images/CAR/BREW.JPG"/>
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
                        </Carousel>
                    </Col>
                    <Col md={2} xs={1}>
                        <Row>
                            <img style={{width: '100%', padding: '0px 0px 100px 0px'}} src="static/images/BN.JPG" />
                        </Row>
                        <Row>
                            <img style={{width: '100%'}} src="static/images/GLASS.JPG" />
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col md={8} xs={10} mdOffset={2} xsOffset={1} >
                        <Panel>
                            <span style={styles.OXYGEN}>Welcome to our wedding webpage!</span>
                            <br />
                            <br />
                            <span style={styles.OXYGEN}>We look forward to a day full of love, and hope to see you there to celebrate this joyous day with us. Our wedding will take place in Sacramento where Colette's parents (as of very recently) live. Although it will not be extremely hot this time of year, we hope the 50-70 degree weather will give most of you a break from the freezing temperatures you will be arriving from.</span>
                            <br />
                            <br />
                            <span style={styles.OXYGEN}>We met back in 2009 during Peace Corps training. We both served in Burkina Faso as Peace Corps Volunteers from 2009-2011. We are both so happy to have had such an incredible experience living in Burkina Faso and making lifelong friends as well meeting our future husband/wife! A bonus- Mikey Berino, a dear fellow Peace Corps Volunteer from our Burkina Faso service, will be performing our wedding ceremony!</span>
                            <br />
                            <br />
                            <span style={styles.OXYGEN}>Hopefully this website will answer some of your questions about the wedding. Please do not hesitate to ask us a question or send us a note by clicking <a href={"#" + routes.QUESTION} >here</a></span>
                            <br />
                            <br />
                            <span style={styles.OXYGEN}>Colette and Bovard</span>
                        </Panel>
                    </Col>
                </Row>
            </Grid>
        );
    }
});

module.exports = Home;
