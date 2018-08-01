'use strict';

(function(module) {
    let stores = [{

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

    for(let i = 0; i < stores.length; i++){
        stores[i].hours = [];
        for(let j = 0; j < 14; j++) {
            let hour = stores[i].hours;
            let cookiesPerhour = getCustomerPerHour(stores[i].min, stores[i].max) * stores[i].avg;
            hour.push(Math.round(cookiesPerhour));
            //console.log('cookies per hour', cookiesPerhour);
        }
    }
    for(let i = 0; i < stores.length; i++){
        stores[i].hours = [];
        for(let j = 0; j < 14; j++) {
            let hour = stores[i].hours;
            let cookiesPerhour = getCustomerPerHour(stores[i].min, stores[i].max) * stores[i].avg;
            hour.push(Math.round(cookiesPerhour));
        }  
       
    }          
        
   

    function getCustomerPerHour(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;       
    }

    // let totals = [];
    // for(let i = 0; i < stores.length; i++){
    
    //     for(let j = 0; j < 14; j++) {
    //         total = total[j].cookiesPerhour[i] = 'finish this later';
    //     }
    // }
    
    // totals.push(total)
    

})(window.module = window.module || {});
















