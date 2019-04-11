/*eslint-env browser*/

//STEP 1

/*
var letterString;

function alphabetic(str) {
	"use strict";
	let i, letterArray =[];
	for (i = 0; i < str.length; i++) {

		letterArray.push(str.substr(i,1).toLowerCase());
	}
	  // console.log(letterArray);
	return letterArray.sort().join("");
}

sortedString = alphabetic("Barbaristic");

console.log(sortedString);

console.log(alphabetic("Abracadabra"));

*/

//STEP 2

var wordsString = 'the quick brown fox';

function capWordsString(str) {
	"use strict";
	 let wordsArray = str.split(" ");
	 console.log(wordsArray);

	 for (let i = 0; i < wordsArray.length; i++) {
		 wordsArray[i] = wordsArray[i].charAt(0).toUpperCase() + wordsArray[i].slice(1);
		  // console.log("words array",wordsArray[i]);
	 }

	return wordsArray.join(" ");
}

updatedString = capWordsString(wordsString);

console.log(updatedString);

console.log(capWordsString("Software development services"));

//STEP 3

//STEP 4

//STEP 5
