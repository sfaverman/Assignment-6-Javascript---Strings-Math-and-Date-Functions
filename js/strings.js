/*eslint-env browser*/

//STEP 1
/*var name = window.prompt("Enter your name");
window.alert("Your name, " + name + ", contains " + name.length + " characters");*/

//STEP 2
/*var name = window.prompt("Enter your name");
var ind = window.prompt("Enter number between 1 and " + name.length);
window.alert("The " + ind + " characher in your name, " + name + ", is "  + name.charAt(ind-1));*/

//STEP 3
/*
var fName = window.prompt("Enter your first name");
var lName = window.prompt("Enter your last name");

window.alert("Your name is " + fName.concat(' ').concat(lName) );
*/

//STEP 4
/*
var text = "The quick brown fox jumps over the lazy dog";
window.alert(text.indexOf("fox"));
*/

//STEP 5
/*
var text = "The quick brown fox jumps over the lazy fox";
window.alert(text.lastIndexOf("fox"));
*/

//STEP 6
/*var text = "The quick brown fox jumps over the lazy dog";
var fullName = window.prompt("Enter full name");

window.alert(text.replace("the lazy dog",fullName));*/

//STEP 7
/*var text = "The quick brown fox jumps over the lazy dog";
var searchWord = window.prompt("Enter word");

window.alert(text.indexOf(searchWord));*/

//STEP 8
/*var old_string = "The quick brown fox jumps over the lazy dog";
//var new_string = old_string.slice(-12);
var new_string = old_string.substr(-12);
window.alert(new_string.toUpperCase());*/

//STEP 9
/*
var text = "            THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG          ";
window.alert(text.trim().toLowerCase());
*/

//STEP 10
var text = "the quick brown fox jumps over the lazy dog";
window.alert(text.charAt(0).toUpperCase() + text.slice(1));

