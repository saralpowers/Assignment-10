//STEP 1: a JavaScript function that returns the letters of a string in alphabetical order
// function alphaOrder (inputStr) {
//    //first put the letters into an array
//    let inputArray = inputStr.split('');

//    //sort the letters in the array
//    inputArray.sort();
//    //console.log(inputArray);

//    //return the array to a string and display
//    inputArray = inputArray.join('');
//    return(inputArray);
// }
// console.log(alphaOrder("typeinstringhere"));

//STEP 2: a JavaScript function that converts the first letter of each word of the string to upper case
// function upperWords (inputStr) {
//     //first put the words into an array
//     let inputArray = inputStr.split(' ');
//     //console.log(inputArray);

//     //capitalize the first letter of each word
//     for (let i = 0; i < inputArray.length; i++) {
//         inputArray[i] = inputArray[i].charAt(0).toUpperCase() + inputArray[i].slice(1);
//         //console.log(inputArray[i]);
//     }

//     //return the array to a string and display
//     inputArray = inputArray.join(' ');
//     return(inputArray);
// }
// console.log(upperWords("the quick brown fox"));

//STEP 3: a JavaScript function that counts the number of vowels in the input parameter string
// function vowelCount (inputStr) {
//     //first put the letters into an array
//     let inputArray = inputStr.toLowerCase().split('');
//     //console.log(inputArray);

//     //function to determine if character is a vowel
//     function isVowel(strArray) {
//         let count = 0;
//         for (let i = 0; i < strArray.length; i++) {
//             if (strArray[i] === "a" || strArray[i] === "e" || strArray[i] === "i" || strArray[i] === "o" || strArray[i] === "u") {
//                 count++;
//             }
//         }
//         return(count);
//     }
//     return(isVowel(inputArray));
// }
// console.log(vowelCount("The quick brown fox"));

//STEP 4: a JavaScript function that generates a length-specified string of random characters
// function stringOfRandoms (strLength) {
//     let randomArray = [];
//     let possibleChar = ("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789");
//     let possibleCharArray = possibleChar.split('');
//     for (let i = 0; i < strLength; i++) {
//         let newChar = Math.floor(Math.random() * possibleCharArray.length);
//         //console.log(newChar);
//         randomArray.push(possibleCharArray[newChar]);
//     }
//     return(randomArray.join(''));
// }
// console.log(stringOfRandoms(8));

//STEP 5: a JavaScript function that accepts a string of country names and returns and displays the longest
// function longestCountryName (inputCountries) {
//     let longestNum = 0;
//     let longestName;
//     for (let i = 0; i < inputCountries.length; i++) {
//         if (inputCountries[i].length > longestNum) {
//             longestNum = inputCountries[i].length;
//             longestName = inputCountries[i];
//         }
//     }
// return(longestName);
// }
// console.log(longestCountryName(["Australia", "Germany", "United States of America"]));




