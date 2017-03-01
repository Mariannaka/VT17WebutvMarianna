var pnumber = document.getElementById("pnumber");
var year = document.getElementById("year");

var click-pnumber = document.getElementById ("click-pnumber");
var click-year = document.getElementById ("click-year");
var click-numbers = document.getElementById ("click-numbers");

click-numbers.addEventListener("click", checkPnumber);
click-year.addEventListener("click", isLeapYear);
click-numbers.addEventListener("click", calcNumbers);

function.isLeapYear (){

	var leapYear= parseInt(document.getElementById("year".value));

	if (document.getElementById("year".value==" ")) {
		alert ("Enter a year!");
		return false;
	}

	if (leapYear >=1000 && leapYear <=3000) {

		if ((leapYear % 4 == 0) && (leapYear % 100 != 0)) || (leapYear % 400 == 0) {
			alert("This is a Leap Year!");
		} else {
			alert("This is NOT a Leap Year!");
			return true;
		} 

	} else {
		alert ("Unvalid year! choose a year between 1000-3000.");
		return false;
	}
}

function.checkPnumber (){


}


function.calcNumbers (){
	var numbers = parseInt(document.getElementById("numbers".value));

	for (int i=0; i<numbers.length; i++) {
		var numLoc= numbers.charAt(i);
		var total= numLoc++;
	} alert ('The sum of your numbers is: ' + total);


}