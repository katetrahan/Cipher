var mySentence = prompt("write a sentence.");

var first= mySentence.charAt(0);
var last= mySentence.charAt(mySentence.length-1);


var newString = function(first,last){
 return first.toUpperCase() + last.toUpperCase()}

alert (newString(first, last));
