/** @jsx React.DOM */
var React = require('react');

var Col = require('react-bootstrap').Col;
var Grid = require('react-bootstrap').Grid;
var Row = require('react-bootstrap').Row;

var styles = require('./styles');

var Interest = React.createClass({
    propTypes: {
        imgUrl: React.PropTypes.string.isRequired,
        url: React.PropTypes.string.isRequired,
        desc: React.PropTypes.string.isRequired,
        title: React.PropTypes.string.isRequired,
        map: React.PropTypes.string.isRequired,
        price: React.PropTypes.string
    },
    render: function() {
        var price;
        if (this.props.price) {
            price = " | " + this.props.price;
        }
        console.log(price);
        return (
            <Col xs={12} md={6}>
                <a href={this.props.url}>
                    <h3 style={styles.OXYGEN}>{this.props.title}</h3>
                    <img style={{'max-width': '100%', 'height': '100px'}} src={this.props.imgUrl} />
                </a>
                <div style={{'height': '100px', 'padding': '10px 0 0 0'}}>
                    <p style={styles.OXYGEN}>
                        <a href={this.props.map}>Map</a> {price}
                    </p>
                    <p style={styles.OXYGEN}>{this.props.desc}</p>
                </div>
            </Col>
        );
    }
});


var interests = [
    {
        title: 'Trick Pony',
        imgUrl: 'static/images/amusements/trickpony.00_png_srz',
        url: 'http://www.trickponypizza.com/',
        desc: "Colette and her mom enjoyed a delicious wood-fired pizza at Trick Pony over the holidays!",
        map: 'https://www.google.com/maps/place/2534+Industrial+Blvd+%23110,+West+Sacramento,+CA+95691/@38.5660149,-121.5434754,17z/data=!3m1!4b1!4m2!3m1!1s0x809ad3f9467567e1:0x615ec81bd94247fc',
        price: '$$'
    },
    {
        title: 'Biba Restaurant',
        imgUrl: 'static/images/amusements/biba.jpg',
        url: 'http://www.biba-restaurant.com/',
        desc: "Authentic Italian food that has great reviews. Colette's parents have not been to this restaurant yet, but are excited to check it out!",
        map: 'https://www.google.com/maps/place/2801+Capitol+Ave,+Sacramento,+CA+95816/@38.570755,-121.470114,17z/data=!3m1!4b1!4m2!3m1!1s0x809ad0eae1cfbb2f:0x208060f73b367ff',
        price: '$$$'
    },
    {
        title: 'Bike Dog Brewing Company',
        imgUrl: 'static/images/amusements/bikedog.png',
        url: 'http://bikedogbrewing.com/',
        desc: "Colette's parents said the beer here was great and the brewery had a fun atmosphere! There are rotating food trucks that park next to the brewery if you want some food with your beer.",
        map: '',
        price: '$$'
    },
    {
        title: 'Jackrabbit Brewing',
        imgUrl: 'static/images/amusements/jackrabbit.jpg',
        url: 'http://www.jackrabbitbrewingcompany.com/',
        desc: "Heard positive reviews about this new brewery in West Sacramento.",
        map: 'https://www.google.com/maps/place/1315+Terminal+St,+West+Sacramento,+CA+95691/@38.5721169,-121.5413686,17z/data=!3m1!4b1!4m2!3m1!1s0x809ad400bf92a5c1:0x69bd3387e2ec010b',
        price: '$$'
    },
    {
        title: 'Amador County Wine Country',
        imgUrl: 'static/images/amusements/amador.jpg',
        url: 'http://www.amadorwine.com/',
        desc: "Amador County wine country is a refreshing discovery for those with a fascination for wine.",
        map: 'http://www.amadorwine.com/visit-us/map-directions/',
        price: '$$'
    },
    {
        title: 'Placer Country Wine Country',
        imgUrl: 'static/images/amusements/placer.jpg',
        url: 'http://www.placerwine.com/',
        desc: "The Placer County Wine Trail is a rustic wine escape within a stone's throw to city life.",
        map: 'http://www.placerwine.com/assets/placer_wine_trail.pdf',
        price: '$$'
    }
];


var Amusements = React.createClass({
    render: function() {
        var entries = interests.map(function(obj) {
            return (
                <Interest
                    title={obj.title}
                    imgUrl={obj.imgUrl}
                    id={obj.imgUrl}
                    url={obj.url}
                    map={obj.map}
                    price={obj.price}
                    desc={obj.desc} />
            );
        });
        return (
            <Grid>
                <Row>
                    {entries}
                </Row>
            </Grid>
        );
    }
});

module.exports = Amusements;
