


function checkPnumber(){
	console.log("first function");
	var myNumber = document.getElementById("pnumber").value;
	console.log(myNumber);
}



function checkLeapYear(){
	var myYear = document.getElementById("year-value").value;

	if (myYear==="") {
		alert ("Enter a year!");
		return false;
	}

	if (((myYear % 4 == 0) && (myYear % 100 != 0)) || (myYear % 400 == 0)) {
		document.getElementById("year-label").innerHTML = "This is a Leap Year!";
		return true;
	} 
		else {
			document.getElementById("year-label").innerHTML = "This is NOT a Leap Year!";
			return false;
		} 

	}



	function resetLabel() {
		document.getElementById("year-label").innerHTML = "";
	}



  function sumUp(){
		var myNumbers = document.getElementById("number-value").value.toString();
		var sum = 0;
		
		for (var i = 0; i < myNumbers.length; i++) {
			sum += parseInt(myNumbers.charAt(i));
		}
		
		document.getElementById("sum-up-label").innerHTML = sum ;
		return sum;
	}