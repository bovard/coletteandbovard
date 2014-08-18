/** @jsx React.DOM */
var React = require('react');

var Button = require('react-bootstrap').Button;
var Input = require('react-bootstrap').Input;

var Question = React.createClass({
    getInitialState: function() {
        return {submitted: false};
    },
    handleSubmit: function() {
        var name = this.refs.name.getValue().trim();
        var email = this.refs.email.getValue().trim();
        var question = this.refs.question.getValue().trim();
        var package = {
            name: name.trim(),
            email: email.trim(),
            question: question.trim()
        };
        this.refs.name.getInputDOMNode().value='';
        this.refs.email.getInputDOMNode().value='';
        this.refs.question.getInputDOMNode().value='';
        this.setState({submitted: true});

        $.ajax({
            url: '/question',
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
                    value="Ask Us!" />;
        if (this.state.submitted) {
            button = <Input
                        type="submit"
                        label="Send"
                        help="Thanks! You'll hear back from us shortly!"
                        labelClassName="col-xs-2"
                        wrapperClassName="col-xs-2"
                        value="Ask Us Again!" />;
        }
        return (
            <form className="form-horizontal" onSubmit={this.handleSubmit}>
                <Input
                    type="text"
                    label="Name"
                    ref="name"
                    placeholder="Your Name Here!"
                    labelClassName="col-xs-2"
                    wrapperClassName="col-xs-10"
                />
                <Input
                    type="text"
                    label="Email"
                    ref="email"
                    placeholder="your.name@place.com"
                    labelClassName="col-xs-2"
                    wrapperClassName="col-xs-10"
                />
                <Input
                    type="textarea"
                    label="Question"
                    ref="question"
                    placeholder="Your question here!"
                    labelClassName="col-xs-2"
                    wrapperClassName="col-xs-10"
                />
                {button}
            </form>

        );

    }
});

module.exports = Question;
