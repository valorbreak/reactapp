'use strict';

var Panel = require('react-bootstrap').Panel;
var React = require('react');

var PanelInstance = React.createClass({
    render: function() {
        return (<div>
                    <Panel header={this.props.header}>Panel Content{this.props.body}</Panel>
                </div>
        )       
    }
});

module.exports = PanelInstance;
