
'use strict';

(function(module){
    var stores = module.stores;
    var toDom = module.toDom;
    var html = module.html;

    var td = document.getElementById('stores-id');

    var render = function(stores) {
        return toDom(html`  
            
    <tr>
        <th>location</th>
        <th>6am</th>
        <th>7am</th>
        <th>8am</th>
        <th>9am</th>
        <th>10am</th>
        <th>11m</th>
        <th>12pm</th>
        <th>1pm</th>
        <th>2pm</th>
        <th>3pm</th>
        <th>4pm</th>
        <th>5pm</th>
        <th>6pm</th>
        <th>7pm</th>
        <th>8pm</th>
    </tr>

    <tr>
        <td>${stores.name}</td>
        <td>${stores.hours[0]}</td>
        <td>${stores.hours[1]}</td>
        <td>${stores.hours[2]}</td>
        <td>${stores.hours[3]}</td>
        <td>${stores.hours[4]}</td>
        <td>${stores.hours[5]}</td>
        <td>${stores.hours[6]}</td>
        <td>${stores.hours[7]}</td>
        <td>${stores.hours[8]}</td>
        <td>${stores.hours[9]}</td>
        <td>${stores.hours[10]}</td>
        <td>${stores.hours[11]}</td>
        <td>${stores.hours[12]}</td>
        <td>${stores.hours[13]}</td>    
    </tr>

    

        `); 

    }; 

    var store;
    for(var i = 0; i < stores.length; i++) {
        store = stores[i];
        var dom = render(store);

        td.appendChild(dom);

        console.log('store one hours', store);
    } 

})(window.module = window.module || {});

