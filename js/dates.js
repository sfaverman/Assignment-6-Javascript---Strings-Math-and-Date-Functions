/*eslint-env browser*/

//STEP 1
/*
var year = window.prompt("Enter year");
var month = window.prompt("Enter month");
var d = new Date(year,month,0);
window.alert(d.getDate());
*/

//STEP 2
/*
d = window.prompt("Enter date mm/dd/yyyy");
var date = new Date(d);
window.alert(date.toString().split(' ')[1]);
*/

//STEP 3
/*
d = window.prompt("Enter date mm/dd/yyyy");
var date = new Date(d);
if (date.getDay() === 0 | date.getDay() === 6) {
 window.alert(d + " date falls on a weekend");
} else {
 window.alert(d + " date falls on a weekday");
}
*/

//STEP 4

/*
var today = new Date();
var yesterday = new Date(today.setDate(today.getDate() - 1));

window.alert(yesterday.getDay());
*/

//STEP 5

var today = new Date();
  var day = today.getDay();
  //console.log(day);
  var daylist = ["S","M","T","W","T","F","S"];
  console.log("Today is : " + daylist[day] + ".");

