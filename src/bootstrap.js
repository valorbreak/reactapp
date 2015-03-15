var Button = require('react-bootstrap').Button;
var Panel = require('react-bootstrap').Panel;
var React = require('react');

var panelInstance = React.createClass({displayName: 'PanelInstance',
    render: function() {
        return React.createElement('div', null, 
                    React.createElement(Button, null, 'Panel Content'),
                    React.createElement(Panel, {"header":this.props.header}, 'Panel Content'),
                    this.props.body
        )       
    }
});

module.exports = panelInstance;
