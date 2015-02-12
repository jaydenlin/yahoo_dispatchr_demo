var Dispatchr = require('dispatchr')(),
    ExampleStore = require('./exampleStore.js'),
    context = {};
    Dispatchr.registerStore(ExampleStore);
    var dispatcher = new Dispatchr(context);

    
    // Action has been handled fully


var Application = React.createClass({
  getInitialState:function(){
    return {
        showtext:'Nice'
    
    }
  },
  handleClick:function(){
       dispatcher.dispatch('NAVIGATE', {'name':'Jayden'});
       this.setState({showtext:dispatcher.getStore(ExampleStore).navigating});
  },
  render: function() {
    return (
    <div>
        <h1 onClick={this.handleClick}>Hello! Rakuten!{this.state.showtext}</h1>
        <p>Build front end with SPEED SPEED SPEED</p>
    </div>);
  }
});

React.render(<Application/>, document.getElementById('content'));



var Application2 = React.createClass({
  getInitialState:function(){
    return {
        showtext:'Nice'
    
    }
  },
  handleClick:function(){
       dispatcher.dispatch('NAVIGATE', {'name':'Jayden'});
       this.setState({showtext:dispatcher.getStore(ExampleStore).navigating});
  },
  render: function() {
    return (
    <div>
        <h1 onClick={this.handleClick}>Hello! Rakuten!{this.state.showtext}</h1>
        <p>Build front end with SPEED SPEED SPEED</p>
    </div>);
  }
});

React.render(<Application2/>, document.getElementById('content2'));