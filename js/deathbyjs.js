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

var sortedString = alphabetic("Barbaristic");

console.log(sortedString);

console.log(alphabetic("Abracadabra"));

*/

//STEP 2

/*
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

var updatedString = capWordsString(wordsString);

console.log(updatedString);

console.log(capWordsString("Software development services"));

*/
//STEP 3

/*
var sampleString = 'The quick brown fox';

function countVowels(str) {
	"use strict";
	 let countVowels = 0, i, j, vowels = ['a','e','i','o','u'];

	 for (i = 0; i < str.length; i++) {
		 for (j = 0; j <= 4; j++ ) {
		     if (str.charAt(i) === vowels[j]) {
				   // console.log("found vowel", str.charAt(i));
				 countVowels++;
				   // console.log(countVowels);

			 }
	  	 } // end for i
	 } // end for j

	return countVowels;;
} // end countVowels

var numbVowels = countVowels(sampleString);

console.log("Number of vowels in " + sampleString + " is: " + numbVowels + " .");

console.log(countVowels("I love this class!"));

*/
//STEP 4

/*
function generateString(length) {
	"use strict";
  let i, newString = "", characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (i = 0; i < length; i++)
    newString += characters.charAt(Math.floor(Math.random() * characters.length));

  return newString;
}

console.log(generateString(7));
*/
//STEP 5

var countries = ["Australia","Canada","Russia","Ukraine","France","Unites States","Afghanistan","Argentina","Israel","England","Spain"];
function longestCountryName(countries) {
	"use strict";
	let nameLength = 0, longestName;
	for (var i = 0; i < countries.length; i++) {
		if (countries[i].length > nameLength) {
			nameLength = countries[i].length;
			longestName = countries[i];
		}
	}
	return longestName;
}

console.log(longestCountryName(countries));
