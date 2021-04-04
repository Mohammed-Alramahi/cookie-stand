'use strict';
let hours = ['6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm'];
let Seatle = null, Tokyo = null, Dubai = null, Paris = null, Lima = null;
let seatlEstimatedSales = [], tokyoEstimatedSales = [], dubaiEstimatedSales = [], parisEstimatedSales = [], limaEstimatedSales = [];
for (let i = 0; i < hours.length; i++) {
  Seatle = {
    name: 'Seatle',
    minCustomers: 23,
    maxCustomers: 65,
    averageSale: 6.3,
    cookiesSold: function () {
      return Math.floor(randomNumber(this.minCustomers, this.maxCustomers) * this.averageSale);
    }
  };
  Tokyo = {
    name: 'Tokyo',
    minCustomers: 3,
    maxCustomers: 24,
    averageSale: 1.2,
    cookiesSold: function () {
      return Math.floor(randomNumber(this.minCustomers, this.maxCustomers) * this.averageSale);
    }
  };
  Dubai = {
    name: 'Dubai',
    minCustomers: 11,
    maxCustomers: 38,
    averageSale: 3.7,
    cookiesSold: function () {
      return Math.floor(randomNumber(this.minCustomers, this.maxCustomers) * this.averageSale);
    }
  };
  Paris = {
    name: 'Paris',
    minCustomers: 20,
    maxCustomers: 38,
    averageSale: 2.3,
    cookiesSold: function () {
      return Math.floor(randomNumber(this.minCustomers, this.maxCustomers) * this.averageSale);
    }
  };
  Lima = {
    name: 'Lima',
    minCustomers: 20,
    maxCustomers: 38,
    averageSale: 2.3,
    cookiesSold: function () {
      return Math.floor(randomNumber(this.minCustomers, this.maxCustomers) * this.averageSale);
    }
  };

  seatlEstimatedSales[i] = [hours[i], Seatle.cookiesSold()];
  tokyoEstimatedSales[i] = [hours[i], Tokyo.cookiesSold()];
  dubaiEstimatedSales[i] = [hours[i], Dubai.cookiesSold()];
  parisEstimatedSales[i] = [hours[i], Paris.cookiesSold()];
  limaEstimatedSales[i] = [hours[i], Lima.cookiesSold()];
}
console.log(seatlEstimatedSales);
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function renderContent(name, list, total) {
  let mainDiv = document.getElementById('sales-main');
  let unorderedList = document.createElement('ul');

  let listHeader = document.createElement('h2');
  mainDiv.appendChild(listHeader);
  listHeader.textContent = name;
  mainDiv.appendChild(unorderedList);
  for (let i = 0; i < hours.length; i++) {
    let listItems = document.createElement('li');
    unorderedList.appendChild(listItems);
    listItems.textContent = hours[i] + ': ' + list[i][1];
  }
  let toatalListItem = document.createElement('li');
  unorderedList.appendChild(toatalListItem);
  toatalListItem.textContent = 'Total: ' + total;


}


renderContent(Seatle.name, seatlEstimatedSales, total(seatlEstimatedSales));
renderContent(Tokyo.name, tokyoEstimatedSales, total(tokyoEstimatedSales));
renderContent(Dubai.name, dubaiEstimatedSales, total(dubaiEstimatedSales));
renderContent(Paris.name, parisEstimatedSales, total(parisEstimatedSales));
renderContent(Lima.name, limaEstimatedSales, total(limaEstimatedSales));



function total(salesTotal) {
  let total = 0;
  for (let i = 0; i < hours.length; i++) {
    total += salesTotal[i][1];

  }
  return total;
}
