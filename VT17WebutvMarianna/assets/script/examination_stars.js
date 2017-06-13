window.onload = displayLoader();

function displayLoader(){

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function (){
    	
        if(this.readyState === 4 && this.status === 200){
            var json = JSON.parse(this.responseText);
            var ratingtofixed = json.rating.toFixed(3);
            
            document.getElementById("user-votes").innerHTML = "Recipe: " + json.recipe + ". Votes: " + json.votes + " Rating:  " + ratingtofixed;
        }
    }

    xhttp.open("GET","https://edu.oscarb.se/sjk15/api/recipe/?api_key=0c964dd5d9fb9898&recipe=lussekatter",true);
    xhttp.send();
}


function functionrait(int) {
    xmlhttp=new XMLHttpRequest();
    xmlhttp.onreadystatechange=function() {
        if (this.readyState==4 && this.status==200) {
            displayLoader();
            display(int);
           
            localStorage.data = "votes is: "+int;
        }
    }
    xmlhttp.open("GET","https://edu.oscarb.se/sjk15/api/recipe/?api_key=0c964dd5d9fb9898&recipe=lussekatter&rating="+int,true);
    xmlhttp.send();
}


function display(value){
    document.getElementById("uservotes").innerText = "Your votes is: " + value;
    
}