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
        distance: React.PropTypes.number.isRequired,
        desc: React.PropTypes.string.isRequired,
        title: React.PropTypes.string.isRequired
    },
    render: function() {
        return (
            <Col xs={12} md={6}>
                <Grid>
                    <Row style={{padding: '0px 0px 10px 0px'}}>
                        <Col xs={12} md={6}>
                            <h3 style={styles.OXYGEN}>{this.props.title}</h3>
                        </Col>
                    </Row>
                    <Row style={{padding: '0px 0px 10px 0px'}}>
                        <Col xs={8} md={4}>
                            <img style={{'max-width': '100%'}} src={this.props.imgUrl} />
                        </Col>
                        <Col xs={4} md={2}>
                            <Row>
                                <a href={this.props.url}><p style={styles.OXYGEN}>{this.props.url}</p></a>
                            </Row>
                            <Row>
                                <p style={styles.OXYGEN}>Distance: {this.props.distance} miles</p>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={6}>
                            <p style={styles.OXYGEN}>{this.props.desc}</p>
                        </Col>
                    </Row>
                </Grid>
            </Col>
        );
    }
});


var interests = [
    {
        title: 'Amador County Wine Country',
        imgUrl: 'static/images/amusements/amador.jpg',
        url: 'http://www.amadorwine.com/',
        distance: 40,
        desc: "Amador County wine country is a refreshing discovery for those with a fascination for wine. Only 45 minutes from the State Capital of Sacramento and two hours from the San Francisco Bay Area, you'll be welcomed with warmth and good taste."
    },
    {
        title: 'Placer Country Wine Country',
        imgUrl: 'static/images/amusements/placer.jpg',
        url: 'http://www.placerwine.com/',
        distance: 35,
        desc: "The Placer County Wine Trail is a rustic wine escape within a stone's throw to city life. With a diverse collection of boutique wineries in the Auburn, Lincoln, Loomis, Newcastle, Rocklin circle and Meadow Vista, our winemakers are here for a warm greeting and are eager to share the knowledge and passion of their craft and award-winning appellation with all levels of enthusiasts. Fall in love with the beauty and bounty with a day or weekend trip to The Placer County Wine Trail."
    }
];


var Amusements = React.createClass({
    render: function() {
        var entries = interests.map(function(obj) {
            return (
                <Interest
                    title={obj.title}
                    imgUrl={obj.imgUrl}
                    url={obj.url}
                    distance={obj.distance}
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
