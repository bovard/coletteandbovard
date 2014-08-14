/** @jsx React.DOM */
var React = require('react');

var Carousel = require('react-bootstrap').Carousel;
var CarouselItem = require('react-bootstrap').CarouselItem;

var Venue = React.createClass({
    render: function() {
        var carStyle = {
            height: "500px",
            width: "900px",
            'text-align': "center"
        };
        return (
            //<div style={carStyle}>
            <Carousel>
                <CarouselItem >
                    <img width={900} height={500} alt="900x500" src="/assets/carousel.png"/>
                    <div className="carousel-caption">
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </div>
                </CarouselItem>
                <CarouselItem>
                    <img width={900} height={500} alt="900x500" src="/assets/carousel.png"/>
                    <div className="carousel-caption">
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </CarouselItem>
                <CarouselItem>
                    <img width={900} height={500} alt="900x500" src="/assets/carousel.png"/>
                    <div className="carousel-caption">
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </div>
                </CarouselItem>
            </Carousel>
            //</div>
        );
    }
});

module.exports = Venue;
