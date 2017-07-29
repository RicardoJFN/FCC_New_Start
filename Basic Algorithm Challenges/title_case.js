/*
Return the provided string with the first letter of each word capitalized. 
Make sure the rest of the word is in lower case.
For the purpose of this exercise, you should also capitalize 
connecting words like "the" and "of".

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

String.prototype.split()

*/

function titleCase(str) {
    var formatedString = str.toLowerCase().split(' ');
    var final = [];

    for (var i = 0; i != formatedString.length; i++) {
        final.push(formatedString[i].replace(formatedString[i].charAt(0), function(x){
            return x.toUpperCase();
        }));
    }
    return final.join(' ');
}

console.log(titleCase("I'm a little tea pot"));