function makeCountingFunction (predicate) {
    return function(items) {
        var passedTest = items.filter(predicate);
        return passedTest.length;

        // Or:
        // var count = 0;
        // for (var i = 0; i < items; i++) {
        //     var n = items[i];
        //     if (predicate(n)) {
        //        count++;
        //     }
        // }
        // return count;
    };
}

function isOdd(number) {
    return number % 2 === 1;
}

function isDivisibleByThree(number) {
  return number % 3 === 0;
}

// We didn't talk about operating on strings for this exercise, 
// but notice how easy it is to make all kinds of functions 
// when our makeCountingFunction is very generic!
function isLowerCase(word) {
  return word.toLowerCase() === word;  
}


var countTheOdds = makeCountingFunction(isOdd);
var countTheTriples = makeCountingFunction(isDivisibleByThree);
var countTheLowerCase = makeCountingFunction(isLowerCase);

console.log(countTheOdds([1, 2, 3, 4, 5, 6, 7]));
// => 4
console.log(countTheTriples([1, 2, 3, 4, 5, 6, 7]));
// => 2
console.log(countTheLowerCase(['cat', 'Mongoose', 'APPLES', 'durian', 'book']));
// => 3



