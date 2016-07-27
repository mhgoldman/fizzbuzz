$(document).ready(function(){
  for (i=1; i<=100; i++) {
    str = ''
    if (i % 3 == 0) {
      str += "fizz";
    }
    if (i % 5 == 0) {
      str += "buzz";
    }
    $('body').append((str || i) + "<br/>");
  }
});