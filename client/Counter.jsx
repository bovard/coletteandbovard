/** @jsx React.DOM */
var React = require('react');
var moment = require('moment');

var weddingDate = '2015-02-28 17:50';

module.exports = React.createClass({
    componentWillMount: function() {
        var intervalID = setInterval(function() {
            var timeStr = moment(weddingDate).fromNow(true);
            this.setState({time: timeStr});
        }.bind(this), 1000);
        var timeStr = moment(weddingDate).fromNow(true);
        this.setState({
            time: timeStr,
            intervalID: intervalID
        });
    },
    componentWillUnmount: function() {
        clearInterval(this.state.intervalID);
    },
    render: function() {
        var text = "See you in " + this.state.time;
        if (moment().isAfter(moment(weddingDate))) {
            text = "Happily married for " + this.state.time
        }
        return (
            <h3 style={this.props.style}>{text}</h3>
        );
    }
});
