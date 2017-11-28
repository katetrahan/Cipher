var mySentence = prompt("write a sentence."); //comes back from prompt input: Toast Output TT

var first = mySentence.charAt(0); //first char, T
var last = mySentence.charAt(mySentence.length-1); //0 based index, 5 -1 =4, T


function newString(){
  var someVariable = "hello";
 return first.toUpperCase() + last.toUpperCase()
}

alert (newString());

function reverseString (){
  var firstAndLast = newString();
  return firstAndLast.charAt(1) + firstAndLast.charAt(0);
}

alert (reverseString());


alert (newString();

// alert (mySentence + newString);






//
// var twoStrings = function (mySentence, newString){
//   return reverseString + mySentence;
// };
//
// alert (twoStrings)
 //       -------

 // var twostrings = function(first,last){
 //   return last.toUpperCase() + first.toUpperCase()
 // }
 //
 // alert (twoStrings(first, last));
// mysentence + reverseString
