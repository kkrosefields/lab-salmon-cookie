'use strict';

(function(module) {
    var stores = [{

        name:'Pike Place Market',
        min:'23',
        max:'65',
        avg:'6.3',
        key:'pike'
    }, {

        name:'SeaTac',
        min:'3',
        max:'24',
        avg:'1.2',
        key:'seatac',
    }, {

        name:'Pike Place Market',
        min:'11',
        max:'38',
        avg:'3.7',
        key:'seattlecenter'
    }, {

        name: 'Capitol Hill',
        min:'20',
        max:'38',
        avg:'2.3',
        key:'caphill'
    }, 

    {
        name: 'Alki',
        min:'2',
        max:'16',
        avg:'4.6',
        key:'alki' 
    
    }];
    module.stores = stores;


})(window.module = window.module || {});


for(var i = 0; i < window.module.stores.length; i++){
    window.module.stores[i].hours = [];
    for(var j = 0; j < 14; j++) {
        var hour = window.module.stores[i].hours;
        var cookiesPerhour = getCustomerPerHour(window.module.stores[i].min, window.module.stores[i].max * window.module.stores[i].avg);
        hour.push(cookiesPerhour);
        console.log('cookies per hour', cookiesPerhour);
    }
}
function getCustomerPerHour(min, max) {
    return Math.random() * (max - min) + min;
}













