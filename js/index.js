
'use strict';

(function(module){
    var stores = module.stores;
    var toDom = module.toDom;
    var html = module.html;

    var tr = document.getElementById('stores-id');

    var render = function(store) {
        return toDom(html`  
    <tr>
        <td>${store.name}</td>
        <td>${store.hours[0]}</td>
        <td>${store.hours[1]}</td>
        <td>${store.hours[2]}</td>
        <td>${store.hours[3]}</td>
        <td>${store.hours[4]}</td>
        <td>${store.hours[5]}</td>
        <td>${store.hours[6]}</td>
        <td>${store.hours[7]}</td>
        <td>${store.hours[8]}</td>
        <td>${store.hours[9]}</td>
        <td>${store.hours[10]}</td>
        <td>${store.hours[11]}</td>
        <td>${store.hours[12]}</td>
        <td>${store.hours[13]}</td>
        <td> ${store.totals} </td> 
    </tr>

    `); 

    }; 

    var store;
    for(var i = 0; i < stores.length; i++) {
        store = stores[i];
        var dom = render(store);

        tr.appendChild(dom);

        console.log('store one hours', store);
    } 

})(window.module = window.module || {});

