
document.getElementById("myValue").addEventListener("input", getOption);
var button2 = document.getElementById("button2");
var one = parseFloat(document.getElementById("one").innerText);
var two = parseFloat(document.getElementById("two").innerHTML);
var three = parseFloat(document.getElementById("three").innerHTML);
var four = parseFloat(document.getElementById("four").innerHTML);
var five = parseFloat(document.getElementById("five").innerHTML);
var six = parseFloat(document.getElementById("six").innerHTML);
var seven = parseFloat(document.getElementById("seven").innerHTML);


function getOption() {
    var myValue = document.getElementById("myValue").value;

	spanOne = (myValue/40) * one;
	spanTwo = (myValue/40) * two;
	spanThree = (myValue/40) * three;
	spanFour = (myValue/40) * four;
	spanFive = (myValue/40) * five;
	spanSix = (myValue/40) * six;
	spanSeven = (myValue/40) * seven;

	document.getElementById("one").innerHTML = spanOne;
	document.getElementById("two").innerHTML = spanTwo;
	document.getElementById("three").innerHTML = spanThree;
	document.getElementById("four").innerHTML = spanFour;
	document.getElementById("five").innerHTML = spanFive;
	document.getElementById("six").innerHTML = spanSix;
	document.getElementById("seven").innerHTML = spanSeven;
}

