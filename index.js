// Write your solution in this file!
var customerName = "bob" ;
console.log(customerName) ;

function upperCaseCustomerName() {
  window.customerName = window.customerName.toUpperCase();
}
console.log(upperCaseCustomerName) ;

function setBestCustomer() {
  window.bestCustomer = "not bob";
}
console.log(setBestCustomer) ;

function overwriteBestCustomer(newBestCustomer) {
  window.bestCustomer = "maybe bob";

}
console.log(overwriteBestCustomer) ;

//

//console.log(changeLeastFavoriteCustomer) ;
const leastFavoriteCustomer = "Kim"
function changeLeastFavoriteCustomer(){
   leastFavoriteCustomer = "bob"
}