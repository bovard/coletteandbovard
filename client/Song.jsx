/** @jsx React.DOM */
var React = require('react');

var Button = require('react-bootstrap').Button;
var Input = require('react-bootstrap').Input;

var Song = React.createClass({
    getInitialState: function() {
        return {submitted: false};
    },
    handleSubmit: function() {
        var name = this.refs.name.getValue().trim();
        var song = this.refs.song.getValue().trim();
        var message = this.refs.message.getValue().trim();
        var package = {
            name: name.trim(),
            song: song.trim(),
            message: message.trim()
        };
        this.refs.name.getInputDOMNode().value='';
        this.refs.song.getInputDOMNode().value='';
        this.refs.message.getInputDOMNode().value='';
        this.setState({submitted: true});

        $.ajax({
            url: '/song',
            dataType: 'json',
            type: 'POST',
            data: JSON.stringify(package),
            contentType: 'application/json; charset=utf-8',
            success: function(data) {

            }.bind(this),
            error: function(xhr, status, err) {
                console.log(err);
            }.bind(this)
        });
        return false;
    },
    render: function() {
        button = <Input
                    type="submit"
                    label="Send"
                    labelClassName="col-xs-2"
                    wrapperClassName="col-xs-2"
                    value="Request" />;
        if (this.state.submitted) {
            button = <Input
                        type="submit"
                        label="Send"
                        help="Woohoo! Thanks! We might not get to play every song but keep your ears peeled at the party!"
                        labelClassName="col-xs-2"
                        wrapperClassName="col-xs-2"
                        value="Request Another!" />;
        }
        return (
            <form className="form-horizontal" onSubmit={this.handleSubmit}>
                <Input
                    type="text"
                    label="Name"
                    ref="name"
                    placeholder="Your Name Here"
                    labelClassName="col-xs-2"
                    wrapperClassName="col-xs-10"
                />
                <Input
                    type="text"
                    label="Song Title / Artist"
                    ref="song"
                    placeholder="Banana Phone by Raffi"
                    labelClassName="col-xs-2"
                    wrapperClassName="col-xs-10"
                />
                <Input
                    type="textarea"
                    label="Message"
                    ref="message"
                    placeholder="Why you like it / what it means to you / 'Hi!'"
                    labelClassName="col-xs-2"
                    wrapperClassName="col-xs-10"
                />
                {button}
            </form>

        );

    }
});

module.exports = Song;
