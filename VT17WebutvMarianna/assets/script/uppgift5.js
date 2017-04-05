var pnumber = document.getElementById("pnumber");
var year = document.getElementById("year");

var click-pnumber = document.getElementById ("click-pnumber");
var click-year = document.getElementById ("click-year");
var click-numbers = document.getElementById ("click-numbers");

click-numbers.addEventListener("input", checkPnumber);
click-year.addEventListener("input", isLeapYear); //try input action
click-numbers.addEventListener("input", calcNumbers);

function.isLeapYear (e){
	e.preventDefault();
	var leapYear= parseInt(document.getElementById("year").value);

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

function.checkPnumber (e){
		e.preventDefault(); 


}


function.calcNumbers (e){
		e.preventDefault();
		var numbers = (document.getElementById("numbers").value);
		var total=0;

	for (int i=0; i<numbers.length; i++) {
		var numLoc= numbers.charAt(i);
		 total+= numLoc;
	} alert ('The sum of your numbers is: ' + total);

}


function calcSum(e){
		e.preventDefault();
		var sum = 0;
		var input = document.getElementById("numberSum").value; //sum
		while(input){
			sum += input%10;
			input = Math.floor(input/10);
		}

		return document.getElementById("numberSumResult").innerHTML = sum;
	}