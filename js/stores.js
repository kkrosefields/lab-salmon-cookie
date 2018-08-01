'use strict';

(function(module) {
    var stores = [{

        name:'Pike Place Market',
        min:'23',
        max:'65',
        avg:'6',
        key:'pike'
    }, {

        name:'SeaTac',
        min:'3',
        max:'24',
        avg:'1',
        key:'seatac',
    }, {

        name:'Pike Place Market',
        min:'11',
        max:'38',
        avg:'3',
        key:'seattlecenter'
    }, {

        name: 'Capitol Hill',
        min:'20',
        max:'38',
        avg:'2',
        key:'caphill'
    }, 

    {
        name: 'Alki',
        min:'2',
        max:'16',
        avg:'6',
        key:'alki' 
    
    }];

    module.stores = stores;

    for(var i = 0; i < stores.length; i++){
        stores[i].hours = [];
        for(var j = 0; j < 14; j++) {
            var hour = stores[i].hours;
            var cookiesPerhour = getCustomerPerHour(stores[i].min, stores[i].max * stores[i].avg);
            hour.push(cookiesPerhour);
            //console.log('cookies per hour', cookiesPerhour);
        }
    }
    function getCustomerPerHour(min, max) {
        return Math.random() * (max - min) + min;
    }
    

})(window.module = window.module || {});
















