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


var HotelEntry = React.createClass({
    propTypes: {
        img: React.PropTypes.string.isRequired,
        url: React.PropTypes.string.isRequired,
        info: React.PropTypes.array.isRequired
    },
    render: function() {
        var info = [];
        this.props.info.forEach(function(item, i) {
            info.push(<div><span style={styles.OXYGEN}>{item}</span><br /><br /></div>)
        });
        return (
            <Col md={6} xs={12}>
                <Row style={{padding: '0px 0px 50px 0px'}} >
                    <Col md={6} xs={12} style={styles.CENTER}>
                        <a href={this.props.url} >
                            <img src={this.props.img} width={"100%"} />
                        </a>
                    </Col>
                </Row>
                <Row style={{padding: '0px 0px 100px 0px'}} >
                    <Col md={6} xs={12} style={styles.CENTER}>
                        {info}
                    </Col>
                </Row>
            </Col>
        )

    }
});


var Hotel = React.createClass({
    render: function() {
        var hotel1Info = [
            "There is a book early rate of 20% off with rates starting at $87/night (stipulation is that you pay in full at the time you book and there are NO refunds)- this is only available for a limited amount of time! Otherwise, normal room rates begin at $109/night plus tax.  Book early for the best rate- they will only increase as hotel gains occupancy." ,
            "The hotel features a bistro/bar, a heated outdoor pool, fitness center, and parking for $8/night. It is 2 miles from Vizcaya and you can easily catch a cab to/from the wedding. It is quick and easy to drive/park at local places that may interest you in Sacramento. This hotel has been recently renovated and will hopefully give you a big bang for your buck!"
        ];
        hotel1 = (<HotelEntry
            url="http://www.marriott.com/hotels/travel/saccy-courtyard-sacramento-midtown/"
            img="/static/images/hotels/marriot2.png"
            info={hotel1Info}
        />);

        var hotel2Info = [
            "We were able to get a 25% discount code when you book with this hotel online. Discount rates begin around $149/night. This code is only applicable until the hotel reaches 90% occupancy. Book early for the best rate and to get 25% off!!",
            "To use discount code, click the logo above, enter your travel dates, click 'Add Special Rate Codes', click 'promotion / offer code', enter BLISS where is says 'enter code', then click 'check availability', the discounted rates will appear, select your desired room and continue with booking the reservation",
            "The hotel features a fitness center, restaurant/bar, and valet parking available for $25/day. It is 2 miles from Vizcaya and you can easily catch a cab to/from the wedding. It is a beautiful hotel located in the downtown area where you can walk to local restaurants, museums, and places of interest. If you are looking to stay in a walk-able downtown location with a more upscale feel- this may be the place for you!"
        ];
        hotel2 = (<HotelEntry
            url="http://www.jdvhotels.com/hotels/california/sacramento-hotels/citizen-hotel"
        img="/static/images/hotels/citizen.png"
        info={hotel2Info}
        />);
        return (
            <Grid>
                <Row>
                    {hotel1}
                    {hotel2}
                </Row>
            </Grid>
        );
    }

});

module.exports = Hotel;
