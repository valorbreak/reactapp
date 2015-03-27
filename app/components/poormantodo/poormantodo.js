'use strict';

var React = require('react');

// Public Functions
var PoorManTodo = React.createClass({
    getInitialState: function(){
        return {lastAction: ''};
    },
    addModel: function() {
        this.props.model.addModel();
        this.setState({lastAction:'add'});
    },
    deleteModel: function() {
        this.props.model.deleteModel();
        this.setState({lastAction:'delete'});
    },
    render: function(){
        var todoList = this.props.model.todo;
        var listTodo = JSON.stringify(this.props.model.todo);
        var stateModel = JSON.stringify(this.state);
        
        var mapCallback = function(item){
            return (<li>{item}</li>);
        }
        const nice = 1;

        var groups = [];
        for(let x=0;x<todoList.length;x++){
            groups.push(<li key={x}>{todoList[x]}</li>);
        }

        return (
            <div>
                <h3>Poor Mans Todo</h3>
                <div>TodoList using Array.map: <pre>{todoList.map(mapCallback)}</pre> </div>
                <div>TodoList using forloop: <pre>{groups}</pre> </div>
                <div>state: <pre>{stateModel}</pre> </div>
                <button onClick={this.addModel}>Add #</button>
                <button onClick={this.deleteModel}>Delete ALL</button>        
            </div>
        );
    }
});

module.exports = PoorManTodo;