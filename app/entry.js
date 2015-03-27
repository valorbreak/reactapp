// React Dependecies
var React = require('react');
var TransitionGroup = require('react/lib/ReactCSSTransitionGroup');

// React Router Dependecies
var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;

// Bootstrap Components
var Panel = require('react-bootstrap').Panel;
var Accordion = require('react-bootstrap').Accordion;
var PanelInstance = require('./bootstrap');

// Components
var PoorManTodo = require('./components/poormantodo/poormantodo');

require.ensure(["./style.css"], function(require) {
    require('../bower_components/bootstrap/dist/css/bootstrap.css');
    require("./style.css");
});

// Set Page Title
document.title = "Is webpack the future? no";

var newDiv = {
    className: "test",
    style: {
        backgroundColor: "#FFF000"
    }
}

var HelloMessage = React.createClass({
    render: function() {
        return <div {...newDiv}> Hello {this.props.name} </div>;
    }
});

var TodoList = React.createClass({
  render: function() {
    var keyCounter = 0;
    var createItem = function(itemText) {
        keyCounter++;
        return <li key={keyCounter}>{itemText}</li>;
    };
    return <ul>{this.props.items.map(createItem)}</ul>;
  }
});

var TodoApp = React.createClass({
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
      <div>
        <h3>TODO</h3>
        <TodoList items={this.state.items} />
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.onChange} value={this.state.text} />
          <button>{'Add #' + (this.state.items.length + 1)}</button>
        </form>
      </div>
    );
  }
});

var BodyContainer = React.createClass({
    render: function(){
        return(
            <div className="container">
                <h3>Dota Graph</h3>
                <ul>
                    <li><Link to="hello">hello</Link></li>
                    <li><Link to="panel">panel</Link></li>
                    <li><Link to="todo">Todo</Link></li>
                    <li><Link to="model">Poor Man todo</Link></li>
                </ul>
                <h3>Current Route: {this.props.state.path}</h3>
         
                {/* this is the important part - similar to <ui-view /> or {outlet} */}
                <TransitionGroup component="div" transitionName="example">
                    <RouteHandler {...this.props}/>
                </TransitionGroup>
            </div>
        );
    }
});

var HelloPartial = React.createClass({
    render: function() {
        return (
            <div>
                <HelloMessage name='john'></HelloMessage>
                <Accordion>
                <Panel header="Collapsible Group Item #1" eventKey='1'>
                  Anim pariatur cliche reprehenderit, 
                </Panel>
                </Accordion>
            </div>
        )
    }
});

var todoModel = {
    todo: [],
    addModel: function() {
        this.todo.push('test');
    },
    deleteModel: function(){
        this.todo = []
    }
}

var PoorManTodoPartial = React.createClass({
    render: function() {
        return (
            <PoorManTodo model={todoModel}></PoorManTodo>
        )
    }
});

var routes = (
    <Route name="app" path="/" handler={BodyContainer}>
        <Route name="hello" path="hi" handler={HelloPartial} />
        <Route name="panel" handler={PanelInstance}/>
        <Route name="todo" handler={TodoApp}/>
        <Route name="model" handler={PoorManTodoPartial}/>
        <DefaultRoute />
    </Route>
);


Router.run(routes, function (Handler,state) {
    React.render(<Handler state={state}/>, document.body);
});
//React.render(<BodyContainer />, document.body); 
