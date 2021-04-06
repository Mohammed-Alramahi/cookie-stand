'use strict';
let hours = ['6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm'];
let stands = ['Seatle', 'Tokyo', 'Dubai', 'Paris', 'Lima'];
let bigTotals = 0;
let minCustoms = [23, 3, 11, 20, 2], maxCustoms = [65, 24, 38, 38, 16], avgSalePerCustomer = [6.3, 1.2, 3.7, 2.3, 4.6];
let mainDiv = document.getElementById('sales-main');
let dataTable = document.createElement('table');
(function header() {
  let trHead = document.createElement('tr');
  let nameCell = document.createElement('th');
  trHead.appendChild(nameCell);
  nameCell.textContent='Name';
  mainDiv.appendChild(dataTable);
  dataTable.appendChild(trHead);
  for (let i = 0; i <= hours.length; i++) {
    if (i !== hours.length) {
      let tableHead = document.createElement('th');
      trHead.appendChild(tableHead);
      tableHead.textContent = hours[i];
    }
    else {
      let tableHead = document.createElement('th');
      trHead.appendChild(tableHead);
      tableHead.textContent = 'Total';
    }
  }
})();

function CookieShop(standName, minCustomers, maxCustomers, averageSale) {
  this.standName = standName;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.averageSale = averageSale;
  this.randomizedNumber = 0;
  this.total = 0;
  this.cookiesSoldPerHour = [];

}
CookieShop.prototype.randomNumber = function () {
  return Math.floor(Math.floor(Math.random() *
    (this.maxCustomers - this.minCustomers) + this.minCustomers) * this.averageSale);
};

CookieShop.prototype.calcCookies = function () {
  for (let i = 0; i < hours.length; i++) {
    this.randomizedNumber = this.randomNumber();
    this.cookiesSoldPerHour[i] = [hours[i], this.randomizedNumber];
  }

  this.calcTotal();
  bigTotals += this.total;
};

CookieShop.prototype.calcTotal = function () {
  for (let i = 0; i < hours.length; i++) {
    this.total += this.cookiesSoldPerHour[i][1];
  }
};

CookieShop.prototype.renderContents = function () {
  this.calcCookies();
  let tableRow = document.createElement('tr');
  let locationCell = document.createElement('td');
  tableRow.appendChild(locationCell);
  locationCell.textContent = this.standName;
  dataTable.appendChild(tableRow);
  for (let i = 0; i <= hours.length; i++) {
    if (i !== hours.length) {
      let rowCell = document.createElement('td');
      tableRow.appendChild(rowCell);
      rowCell.textContent = this.cookiesSoldPerHour[i][1];
    }
    else {
      let rowCell = document.createElement('td');
      tableRow.appendChild(rowCell);
      rowCell.textContent = this.total;
    }
  }
};
let  objArr = [];
let objectTotalCol = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
(function makeObject() {
  for (let i = 0; i < stands.length; i++) {
    objArr.push(new CookieShop(stands[i], minCustoms[i], maxCustoms[i], avgSalePerCustomer[i]));
    objArr[i].renderContents();
  }

  for (let i = 0; i < objArr.length; i++) {
    for (let j = 0; j < (objArr[i].cookiesSoldPerHour).length; j++) {
      objectTotalCol[j] += objArr[i].cookiesSoldPerHour[j][1];
    }
  }
})();

(function footer() {
  let footerRow = document.createElement('tr');
  let totalCell = document.createElement('th');
  let  grandTotal= document.createElement('th');
  footerRow.appendChild(totalCell);
  totalCell.textContent = 'Total';
  dataTable.appendChild(footerRow);
  for (let i = 0; i < objectTotalCol.length; i++) {
    let totalData = document.createElement('th');
    footerRow.appendChild(totalData);
    totalData.textContent = objectTotalCol[i];
  }
  footerRow.appendChild(grandTotal);
  grandTotal.textContent = bigTotals;
})();

