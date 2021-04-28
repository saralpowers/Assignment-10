//STEP 1: an application that prompts user for name, finds the length of name, and then displays results in an alert
//let nameStr = window.prompt("What is your name?");
//alert(`Your name has ${nameStr.length} characters`);

//STEP 2: an application that prompts user for name and a numeric value to find the letter in the name they specified and alert the result
//let nameStr = window.prompt("What is your name?");
//let numberStr = window.prompt(`Enter a number between 1 and ${(nameStr.length + 1)}`);

//alert(`Letter number ${parseInt(numberStr)} in your name is "${nameStr.charAt(parseInt(numberStr) - 1)}"`);

//STEP 3: an application that prompts user for first, then last names and then concatenates and displays the full name
//let firstName = window.prompt("Enter your first name:");
//let lastName = window.prompt("Enter your last name:");

//alert("Your name is: " + firstName.concat(" ", lastName));

//STEP 4: an application that stores a declared string and then displays an index for one of the word in the string
//let moralStr = "The quick brown fox jumps over the lazy dog";
//alert(`The index of the word "fox" is: ${moralStr.indexOf("fox")}`);

//STEP 5: an application that stores a declared string and then displays an index for the last occurence of the word in the string
//let moralStr = "The quick brown fox jumps over the lazy fox";
//alert(`The index of the last occurence of the word "fox" is: ${moralStr.lastIndexOf("fox")}`);

//STEP 6: an application that stores a string in a variable, asks the user for name, and then replaces part of the string with the name and displays it in an alert
//let moralStr = "The quick brown fox jumps over the lazy dog";
//let fullName = window.prompt("Enter your full name:");
//alert(`Something funny: ${moralStr.replace('the lazy dog', fullName)}`);

//STEP 7: an application that stores a string in a variable, asks the user to input a word, and then searches the string and displays the result
//let moralStr = "The quick brown fox jumps over the lazy dog";
//let userWord = window.prompt("Enter a word:");
//let wordIndex = moralStr.search(userWord);
//if (wordIndex > 0) {
//    alert(`The index of the word "${userWord}" in the string is ${wordIndex}`);
//} else if (wordIndex === -1) {
//    alert(`The word "${userWord}" is not in the string`);
//}

//STEP 8: an application that stores a string in a variable, extracts "the lazy dog", stores the result in a new variable new_String, and displays the result in uppercase
//to display the string that was extracted
//let old_String = "The quick brown fox jumps over the lazy dog";
//let num = old_String.indexOf('the');
//let new_String = old_String.slice(num);
//alert(new_String.toUpperCase());

//to display the part of the string that was left
//let old_String = "The quick brown fox jumps over the lazy dog";
//let num = old_String.indexOf('the');
//let new_String = old_String.substring(0, num);
//alert(new_String.toUpperCase());

//STEP 9: an application that takes an uppercase string and trims the excess whitespace and displays the result in lowercase
//let upperDog = "    THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG     "
//alert(upperDog.trim().toLowerCase());

//STEP 10: an application that stores a string in all lowercase, programmatically capitalizes the first letter, and then displays the result.
//let foxString = "the quick brown fox jumps over the lazy dog";
//alert(foxString.charAt(0).toUpperCase() + foxString.slice(1));



