// A brain teaser

// The classic 
// "closures + for loops + mutation + async functions = WTF" exercise

// *** All answers in commented-out code. ***

var fruits = [
  document.getElementById('dragonfruit'),
  document.getElementById('mango'),
  document.getElementById('apple')
];

for (var i = 0; i < fruits.length; i++) {
  fruits[i].addEventListener('click', function() {
    alert('I am the number ' + (i+1) + ' fruit!');
  });
}

// (FYI: 'addEventListener' is basically the DOM API version
// of jQuery's 'on' method, and it is what jQuery's 'on'
// method uses under the hood.)


// So what we want to have happen here is
// that when the user clicks dragonfruit, it alerts
// "I am the number 1 fruit", when they click mango,
// it alerts "I am the number 2 fruit", and when they
// click apple, it alerts "I am the number 3 fruit".

// 1. What happens instead?

// --- It says "I am the number 4 fruit" every time. 

// 2. Why?

// --- When the for loop finishes executing, the value
//     of the variable "i" is 3. That is the value that
//     gets accessed when the event listening functions
//     actually run. These functions access that value
//     of "i" through a closure (i.e. because they are
//     closing over the variable "i", which was declared
//     in the top-level scope, the global scope.)

// 3. Fix this problem, using the .forEach method
//    instead of a for loop.

// fruits.forEach(function(fruit, i) {
//   fruit.addEventListener('click', function() {
//     alert('I am the number ' + (i+1) + ' fruit!');
//   });
// });


// Note: You will need to know something we might not have taught yet
//       about the .forEach function, which is that the callback takes
//       another argument: the index itself. So

//       ["a", "b" "c"].forEach(function(item, index) {
//         console.log(item + " has index " + index);
//       });
//       // => a has index 0
//       // => b has index 1
//       // => c has index 2

// 4. Why does your fix work?

// --- Because the anonymous event handling function is 
//     closing over a different copy of the variable "i" 
//     each time -- one that is passed by the forEach 
//     function to the iterator function, and will not 
//     change in value in the future.


// BONUS: Look up "Immediately Invoked Function Expressions"
//        on the internet. One good link is the one in our
//        "further resources", https://www.sitepoint.com/demystifying-javascript-closures-callbacks-iifes/
//        Instead of using .forEach, keep the for loop and 
//        use an IIFE to fix the above problem.

// for (var i = 0; i < fruits.length; i++) {
//   (function(index) {
//     fruits[index].addEventListener('click', function() {
//       alert('I am the number ' + (index+1) + ' fruit!');
//     });
//   })(i);
// }

