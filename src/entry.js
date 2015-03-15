require('./style.css');

//require('html!./index.html');
var React = require('react');
var PanelInstance = require('./bootstrap');

React.ele = React.createElement;

var HelloMessage = React.createClass({displayName: "HelloMessage",
    render: function() {
        return React.createElement("div", null, "Hello ", this.props.name);
    }
});

document.write('<div id="react"></div><div id="react2"></div>');

React.render(React.createElement(PanelInstance, {body:"This is inline body", header: "THIS"}), document.getElementById('react'));

var TodoList = React.createClass({displayName: "TodoList",
    render: function() {
        var createItem = function(itemText) {
            return React.createElement("li", null, itemText);
        };
        return React.createElement("ul", null, this.props.items.map(createItem));
    }
});


var TodoApp = React.createClass({displayName: "TodoApp",
    getInitialState: function() {
        return {items: [], text: ''};
    },
    onChange: function(e) {
        this.setState({text: e.target.value});
    },
    handleSubmit: function(e) {
        e.preventDefault();
        var nextItems = this.state.items.concat([this.state.text]);
        var nextText = '';
        this.setState({items: nextItems, text: nextText});
    },
    render: function() {
        return (
            React.DOM.div(null, 
                React.DOM.h3(null, "TODO"), 
                React.createElement(TodoList, {items: this.state.items}), 
                React.DOM.form({onSubmit: this.handleSubmit}, 
                    React.DOM.input({onChange: this.onChange, value: this.state.text}), 
                        React.DOM.button(null, 'Add #' + (this.state.items.length + 1))
                )
            )
        );
    }
});

React.render(React.createElement(TodoApp, null), document.getElementById('react2') ); 
