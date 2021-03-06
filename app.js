// Global variables

var hours = ['6:00am - 7:00am', '7:00am - 8:00am', '8:00am - 9:00am', '9:00am - 10:00am', '10:00am - 11:00am', '11:00am - 12:00pm', '12:00pm - 1:00pm', '1:00pm - 2:00pm', '2:00pm - 3:00pm', '3:00pm - 4:00pm', '4:00pm - 5:00pm', '5:00pm - 6:00pm','6:00pm - 7:00pm', '7:00pm - 8:00pm'];

// Constructor to generate patCookiesLocation instances
function PatCookiesLocation (locationName, minCust, maxCust, avgCookiesPerCust, iDPat) {
  this.locationName = locationName;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookiesPerCust = avgCookiesPerCust;
  this.iDPat = iDPat;
  this.hourlyCustomersArray = [];
  this.hourlySalesArray = [];
  this.totalSales = 0;
};

// Prototype to generate hourly customers
PatCookiesLocation.prototype.calcHourlyCustomers = function() {
  for(var i = 0; i < hours.length; i++) {
    var randomCust = Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
    this.hourlyCustomersArray.push(randomCust);
  }
};

// Prototype to generate hourly sales
PatCookiesLocation.prototype.calcHourlySales = function() {
  for(var i = 0; i < hours.length; i++) {
    var cookiesSoldThatHour = this.hourlyCustomersArray[i] * this.avgCookiesPerCust;
    this.hourlySalesArray.push(cookiesSoldThatHour);
    this.totalSales += cookiesSoldThatHour;
  }
};

// Prototype to trigger render of unordered list
makeHeaderRow = function() {
  var cookieTable = document.getElementById('patCookiesLocationTable');
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  thEl.textContent = ' ';
  trEl.appendChild(thEl);
  // cookieTable.appendChild(trEl);

  var thEl = document.createElement('th');
  thEl.textContent = 'Daily Location Total';
  trEl.appendChild(thEl);

  for (var i = 0; i < hours.length; i++) {
    var thEl = document.createElement('th');
    thEl.textContent = hours[i];
    trEl.appendChild(thEl);
  };

  cookieTable.appendChild(trEl);
};
makeHeaderRow();

PatCookiesLocation.prototype.render = function() {
  this.calcHourlyCustomers();
  this.calcHourlySales();
  var cookieTable = document.getElementById('patCookiesLocationTable');
  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');
  tdEl.textContent = this.locationName;
  trEl.appendChild(tdEl);
  // cookieTable.appendChild(trEl);

  var tdEl = document.createElement('td');
  tdEl.textContent = Math.round(this.totalSales);
  trEl.appendChild(tdEl);

  for (var i = 0; i < hours.length; i++) {
    var tdEl = document.createElement('td');
    tdEl.textContent = Math.round(this.hourlySalesArray[i]);
    trEl.appendChild(tdEl);
  };

  cookieTable.appendChild(trEl);
};

  // for(var i = 0; i < hours.length; i++) {
  //   var listItem = document.createElement('li');
  //   listItem.textContent = hours[i] + ': ' + Math.round(this.hourlySalesArray[i]) + ' cookies';
  //   var patCookieLocationList = document.getElementById(this.iDPat);
  //   document.getElementById(this.iDPat).appendChild(listItem);
  // }
  // var totalListItem = document.createElement('li');
  // totalListItem.textContent = 'Total: ' + Math.round(this.totalSales) + ' cookies';
  // patCookieLocationList.appendChild(totalListItem);
// };

// All instances and calls of prototypes to calculate hourly customers, hourly sales, and then render on the page
var firstAndPike = new PatCookiesLocation('First and Pike', 23, 65, 6.3, 'pikeID');
firstAndPike.render();

var seaTac = new PatCookiesLocation('SeaTac', 3, 24, 1.2, 'seaTacID');
seaTac.render();

var seaCenter = new PatCookiesLocation('Seattle Center', 11, 38, 3.7, 'seaCenterID');
seaCenter.render();

var capHill = new PatCookiesLocation('Capitol Hill', 20, 38, 2.3, 'capHillID');
capHill.render();

var alki = new PatCookiesLocation('Alki', 2, 16, 4.6, 'alkiID');
alki.render();

// Instead of rendering each individually, add each instance to an array (like allStoresArray) and create a function that generates sales numbers by calling the array. This call requires a for loop that calls allStoresArray[i].render(i); Then, call the 'generate sales numbers' function directly below makeHeaderRow at the bottom of the document

// to color alternating lines, add ID to alternating trEL
