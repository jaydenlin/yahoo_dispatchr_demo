var Dispatchr = require('dispatchr')(),
    ExampleStore = require('./exampleStore.js'),
    pubsub=require('pubsub-js'),
    context = {};
    Dispatchr.registerStore(ExampleStore);
    var dispatcher = new Dispatchr(context);

    
    // Action has been handled fully


var Application = React.createClass({
  getInitialState:function(){

    return {
        dummy:'',
        showtext:dispatcher.getStore(ExampleStore).navigating
    
    }
  },
  componentDidMount:function(){
/*
    var that=this;
    pubsub.subscribe('refresh',function(event,data){
        that.setState({dummy:''});
        
        console.log(data);
     }); 
*/
  
  },
  handleClick:function(){
  
       //send name to App2
       dispatcher.dispatch('NAVIGATE', {'name':'Jayden'});

       //this.setState({showtext:dispatcher.getStore(ExampleStore).navigating});
      
  },
  render: function() {
   console.log('1 render');
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
        dummy:'',
        showtext:dispatcher.getStore(ExampleStore).navigating
    
    }
  },
  componentDidMount:function(){
/*
     var that=this;
     pubsub.subscribe('refresh',function(event,data){
        that.setState({dummy:''});
        console.log(data);
     }); 
*/
  
  },
  handleClick:function(){
       //dispatcher.dispatch('NAVIGATE', {'name':'Jayden'});
       //this.setState({showtext:dispatcher.getStore(ExampleStore).navigating});
  },
  render: function() {
    console.log('2 render');
    return (
    <div>
        <h1 onClick={this.handleClick}>Hello! Rakuten!{this.state.showtext}</h1>
        <p>Build front end with SPEED SPEED SPEED</p>
    </div>);
  }
});

React.render(<Application2/>, document.getElementById('content2'));