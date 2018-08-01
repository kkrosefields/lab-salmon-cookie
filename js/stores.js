'use strict';

(function(module) {
    let stores = [{

        name:'Pike Place Market',
        min: 23,
        max: 65,
        avg: 6,
        key:'pike',
        total: 0
    }, {

        name:'SeaTac',
        min: 3,
        max: 24,
        avg: 1.2,
        key:'seatac',
        total: 0
    }, {

        name:'Pike Place Market',
        min: 11,
        max: 38,
        avg: 3.7,
        key:'seattlecenter',
        total: 0
    }, {

        name: 'Capitol Hill',
        min: 20,
        max: 38,
        avg: 2,
        key:'caphill',
        total: 0
    }, 

    {
        name: 'Alki',
        min: 2,
        max: 16,
        avg: 6,
        key:'alki',
        total: 0
    
    }];

    module.stores = stores;
    //cookies per hour
    for(let i = 0; i < stores.length; i++){
        stores[i].cookiesPerHour = 0;
        for(let j = 0; j < 14; j++) {
            // let cookiesPerhourPerStore = stores[i].hours;
            let tempCookiesPerHour = getCustomerPerHour(stores[i].min, stores[i].max);
    
            stores[i].cookiesPerHour += (Math.round(tempCookiesPerHour));
            // console.log('cookies per hour', stores[i].cookiesPerHour);
        }
    }

    for(let i = 0; i < stores.length; i++){
        console.log ('before', stores[i].total); 
        for(let j = 0; j < 14; j++) {
            stores[i].total += stores[i].hours[j];

        }  
        console.log ('after', stores[i].total);  
    }   
    
    for(let i = 0; i < stores.length; i++){
        console.log ('before', stores[i].total); 
        for(let j = 0; j < 14; j++) {
            stores[i].total += stores[i].hours[j];

        }  
   
    }   

    for(let i = 0; i < stores.length; i++){
        let hourlyStoreTotals = store.name[i].hourly;
        for(let j = 0; j < 4; j++) 

            console.log ('after', stores[i].total);  
    }   

    function getRandomNum(min, max) {
        return Math.random() * (max - min) + min;       
    }

    function getCustomerPerHour(custMin, custMax){
        var customerPerHour = getRandomNum(custMin, custMax);
        console.log ('customer Per hour', customerPerHour);
    
    }


    
    

})(window.module = window.module || {});
















