var createStore = require('dispatchr/utils/createStore');
var pubsub=require('pubsub-js');

var MyStore = createStore({
    initialize: function () {}, 
    navigating:'hello',// Called immediately after instantiation
    storeName: 'MyStore',
    handlers: {
        'NAVIGATE': function (payload) {
            console.log(payload);
            this.navigating = payload.name;
            
            pubsub.publish( 'refresh', 'hello world!' );
            this.emitChange();
            
        }
    }
});
module.exports = MyStore;