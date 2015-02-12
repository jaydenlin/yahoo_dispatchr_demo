var createStore = require('dispatchr/utils/createStore');
var MyStore = createStore({
    initialize: function () {}, // Called immediately after instantiation
    storeName: 'MyStore',
    handlers: {
        'NAVIGATE': function (payload) {
            console.log(payload);
            this.navigating = payload.name;
            
            this.emitChange();
            
        }
    }
});
module.exports = MyStore;