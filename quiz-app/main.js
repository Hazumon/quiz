var answer = prompt("At what temperature on the Celsius scale does water freeze?");

var results = document.getElementById("result");

if (answer === "0"){

results.innerHTML = answer + " degrees Celsius is the correct answer";
}

else{

results.innerHTML = answer + " degrees Celsius is NOT the correct answer";

}
