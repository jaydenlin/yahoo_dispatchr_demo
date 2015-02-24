var Dispatchr = require('dispatchr')(),
    ExampleStore = require('./exampleStore.js'),
    L20n = require('!transform?brfs!l20n');
    context = {};
    Dispatchr.registerStore(ExampleStore);
    var dispatcher = new Dispatchr(context);
    
 
/*require('../libs/l20n.js');*/
var test = require('fs');
test.readFile('./test.txt', 'utf8',function(){});

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
  componentDidMount:function(){
    
/*
   
*/
  
  },
  render: function() {
    return (
    <div>
        <h1 onClick={this.handleClick}>Hello! Rakuten!{this.state.showtext}</h1>
        <p data-l10n-id="hello"></p>
    </div>);
  }
});

console.log(L20n.getContext());
ctx = L20n.getContext();
ctx.linkResource('../locales/strings.l20n');
ctx.requestLocales();
/*ctx.addResource('<hello "Hello, world!">');*/

/*

ctx.localize(['hello'], function(l10n) {
  //console.log(l10n);
  var node = document.querySelector('[data-l10n-id=hello]');
  node.textContent = l10n.entities.hello.value;
  
});


*/


React.render(<Application/>, document.getElementById('content'));


 








/*
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

React.render(<Application2/>, document.getElementById('content2'));*/
