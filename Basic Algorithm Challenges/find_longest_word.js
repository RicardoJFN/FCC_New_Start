/**
 * Return the length of the longest word in the provided sentence.

Your response should be a number.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

String.prototype.split()
String.length
 */

 function findLongestWord(str) {
    
    var formatedStr = str.split(' ');
    var max = 0;

    for (var i = 0; i != formatedStr.length; i++) {
        if (formatedStr[i].length > max) {
            max = formatedStr[i].length;       
        }
       
    }
    
    return max;
 }

 console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));