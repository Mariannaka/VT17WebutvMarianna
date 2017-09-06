


function checkPnumber(){
	//console.log("first function");
	var mypNumber = document.getElementById("pnumber").value;
	var mypNumberResult = document.getElementById("pnumber-label");
	var sum =0; //not refering to 0 returns NaN, refering it to 0 makes it a numeric variable.
	console.log(mypNumber);

	if (mypNumber == "") {
		window.alert("Please, insert a personal ID to check!")
	}

	if (isNaN(mypNumber)) {
		window.alert("Please, insert a valid personal ID with no symbols");
	}
	 if (mypNumber.length >= 12){
	 	mypNumber = mypNumber + "0";
	 	mypNumber = mypNumber.slice(-11, -1);
	 	console.log(mypNumber);
	 }
	 console.log(mypNumber);
	 console.log(mypNumber.length);

	 for (var i=0; i < mypNumber.length; i++){
	 	console.log("i== " + i);

	 	if (i % 2 == 1){
	 		sum += parseInt(mypNumber.charAt(i));
	 		console.log("sum== " + sum);
	 	}

	 		else if (i % 2 == 0 ) {
	 		var evenSum = 0; //saves the result of even "2" number multiplication and then it sumed upp with "sum" variable
	 		evenSum = parseInt( (mypNumber.charAt(i)) * 2);

	 			if (evenSum > 9) {
	 				//console.log ("old evenSum= " + evenSum);
	 				evenSum = evenSum -9;
	 				//console.log ("new evenSum= " + evenSum);
	 				sum += evenSum;
	 				//console.log ("new sum==" + sum);
	 			} else if (evenSum) {
	 				sum += evenSum;
	 			} 

	 		} 
}

//console.log("final evenSum==  " + evenSum);
	 	 console.log("final sum== " + sum);

	 	 if(sum % 10 == 0) {
	 	 	mypNumberResult.innerHTML = "Valid person nummer";
	 	 } else {
	 	 	mypNumberResult.innerHTML = "INvalid person nummer";
	 	 }


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