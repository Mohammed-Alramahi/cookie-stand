'use strict';
let hours = ['6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm'];
let majorTotal = 0;
let mainDiv = document.getElementById('sales-main');
let dataTable = document.createElement('table');
function header() {
  let trHead = document.createElement('tr');
  let nameCell = document.createElement('th');
  trHead.appendChild(nameCell);
  nameCell.textContent = 'Name';
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
}
header();
let standsObj = [];
function CookieShop(standName, minValue, maxValue, avgSale) {
  this.standName = standName;
  this.minValue = minValue;
  this.maxValue = maxValue;
  this.avgSale = avgSale;
  this.randomizedNumber = 0;
  this.total = 0;
  this.salesPerHour = [];
  standsObj.push(this);
}
CookieShop.prototype.randomNumber = function () {
  return Math.floor(Math.floor(Math.random() *
      (this.maxValue - this.minValue) + this.minValue) * this.avgSale);
};

CookieShop.prototype.calcSales = function () {
  for (let i = 0; i < hours.length; i++) {
    this.randomizedNumber = this.randomNumber();
    this.salesPerHour[i] = this.randomizedNumber;
  }
};
CookieShop.prototype.calcTotal = function () {
  this.calcSales();
  for (let i = 0; i < hours.length; i++) {
    this.total += this.salesPerHour[i];
  }
  majorTotal+=this.total;
};
let rowCell=null;
let tableRow=null;
CookieShop.prototype.renderContents = function () {
  this.calcTotal();
  tableRow= document.createElement('tr');
  let locationCell = document.createElement('td');
  tableRow.appendChild(locationCell);
  locationCell.textContent = this.standName;
  dataTable.appendChild(tableRow);
  for (let i = 0; i <= hours.length; i++) {
    if (i !== hours.length) {
      rowCell= document.createElement('td');
      tableRow.appendChild(rowCell);
      rowCell.textContent = this.salesPerHour[i];
    }
    else {
      let rowCell = document.createElement('td');
      tableRow.appendChild(rowCell);
      rowCell.textContent = this.total;
    }
  }
  this.total=0;
};

  
function newShop() {
  let seatle = new CookieShop('seatle', 23, 65, 6.3);

  let tokyo = new CookieShop('tokyo', 3, 24, 1.3);


  let dubai = new CookieShop('dubai', 11, 38, 3.7);


  let paris = new CookieShop('paris', 20, 38, 2.3);


  let lima = new CookieShop('lima', 2, 16, 4.6);

}
newShop();
console.log(standsObj);

let form = document.getElementById('standform');
form.addEventListener('submit', execute);
function execute(e) {
  e.preventDefault();
  let standName =e.target.standname.value;
  let minCustomers =  parseInt(e.target.mincustomers.value);
  let maxCustomers = parseInt(e.target.maxcustomers.value);
  let avgSales = parseInt(e.target.avgsales.value);
  let newStand= new CookieShop(standName,minCustomers,maxCustomers,avgSales);
  dataTable.textContent='';
  header();
  for(let i=0;i<standsObj.length;i++)
  {
    standsObj[i].renderContents();
  } 
  console.log(standsObj);
  footerRow.textContent='';
  footer();
}

for(let i=0;i<standsObj.length;i++)
{
  standsObj[i].renderContents();
} 
let total=0;
let footerRow = null;
function footer() {
  footerRow =document.createElement('tr');
  let totalCell = document.createElement('th');
  footerRow.appendChild(totalCell);
  totalCell.textContent = 'Total';
  dataTable.appendChild(footerRow);

  for(let i=0;i<hours.length;i++)
  {
    for(let j=0;j<standsObj.length;j++)
    {
      total += standsObj[j].salesPerHour[i];
    }
    let totalData = document.createElement('th');
    footerRow.appendChild(totalData);
    totalData.textContent=total;
    total=0;
    
    
  }
  let majorTotalcell = document.createElement('th');
    footerRow.appendChild(majorTotalcell);
    majorTotalcell.textContent=majorTotal;
    majorTotal = 0;
  
}
footer();