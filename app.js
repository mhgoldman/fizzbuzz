'use strict'

$(document).ready(function(){
  var num;

  do {
    var numStr = prompt("Enter a number");
    num = parseInt(numStr);

  } while (isNaN(num) && numStr !== null);

  if (num !== null) {
    var output = fizzbuzz(num);
    $('body').append(output);
  } 
});

function fizzbuzz(topNumber) {
  var str = '';

  for (var i=1; i<=topNumber; i++) {
    str += fizzbuzzFor(i) + "<br/>";
  }

  return str;

  function fizzbuzzFor(number) {
    var str = '';

    if (number % 3 == 0) {
      str += "fizz";
    }
    if (number % 5 == 0) {
      str += "buzz";
    }

    if (str == '')  {
      str = number;
    }

    return str;
  }
  
}

