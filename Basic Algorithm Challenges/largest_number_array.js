/*
Return an array consisting of the largest number from each provided sub-array. 
For simplicity, the provided array will contain exactly 4 sub-arrays.

Remember, you can iterate through an array with a simple for loop, 
and access each member with array syntax arr[i].

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

Comparison Operators
*/

function largestOfFour(arr) {
    var largest = [];
    var max = 0;
    for (var i = 0; i != arr.length; i++) {
        for (var j = 0; j != arr[i].length; j++) {
            var ini = arr[i][j];
            var iniPlus = arr[i][j + 1];

            if (ini < iniPlus ) {
                largest.push(iniPlus);
            } else if (ini > iniPlus ) {
                largest.push(ini);
            }
            //console.log("Ini: " + ini + " - " + "IniPlus: " + iniPlus + "; ");
            
        }
    }
    
    return largest;
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], 
    [1000, 1001, 857, 1]]));   