
//VARIABLES
var button_one = document.getElementById("strike-button-one");
var button_two = document.getElementById("strike-button-two");
var button_three = document.getElementById("strike-button-three");
var button_four = document.getElementById("strike-button-four");
var button_five = document.getElementById("strike-button-five");
var button_six = document.getElementById("strike-button-six");
var button_seven = document.getElementById("strike-button-seven");
var nextdaybutton = document.getElementById("nextDayButton");

const day = document.getElementById("day");

let days = 1;
var buttons = document.getElementsByClassName("strikeButtons");
var buttonCount = buttons.length;
var clickCount = 0;

//REST

button_one.addEventListener("click", function() {
  button_one.classList.toggle("struck");
  clickCount++;
  localStorage.setItem("button_one", button_one.classList.contains("struck"));
  this.disabled = true;});
button_two.addEventListener("click", function() {
  button_two.classList.toggle("struck");
  clickCount++;
  localStorage.setItem("button_two", button_two.classList.contains("struck"));
  this.disabled = true;});
button_three.addEventListener("click", function() {
  button_three.classList.toggle("struck");
  clickCount++;
  localStorage.setItem("button_three", button_three.classList.contains("struck"));
  this.disabled = true;});
button_four.addEventListener("click", function() {
  button_four.classList.toggle("struck");
  clickCount++;
  localStorage.setItem("button_four", button_four.classList.contains("struck"));
  this.disabled = true;});
button_five.addEventListener("click", function() {
  button_five.classList.toggle("struck");
  clickCount++;
  localStorage.setItem("button_five", button_five.classList.contains("struck"));
  this.disabled = true;});
button_six.addEventListener("click", function() {
  button_six.classList.toggle("struck");
  clickCount++;
  localStorage.setItem("button_six", button_six.classList.contains("struck"));
  this.disabled = true;});
button_seven.addEventListener("click", function() {
  button_seven.classList.toggle("struck");
  clickCount++;
  localStorage.setItem("button_seven", button_seven.classList.contains("struck"));
  this.disabled = true;});

days = parseInt(localStorage.getItem("days")) || 1;

nextdaybutton.addEventListener("click", function() {
  if (button_one.classList.contains("struck") && button_two.classList.contains("struck") && button_three.classList.contains("struck") && button_four.classList.contains("struck") && button_five.classList.contains("struck") && button_six.classList.contains("struck") && button_seven.classList.contains("struck")) {
    button_one.classList.remove("struck");
    button_two.classList.remove("struck");
    button_three.classList.remove("struck");
    button_four.classList.remove("struck");
    button_five.classList.remove("struck");
    button_six.classList.remove("struck");
    button_seven.classList.remove("struck");
    document.getElementById("strike-button-one").disabled = false;
    document.getElementById("strike-button-two").disabled = false;
    document.getElementById("strike-button-three").disabled = false;
    document.getElementById("strike-button-four").disabled = false;
    document.getElementById("strike-button-five").disabled = false;
    document.getElementById("strike-button-six").disabled = false;
    document.getElementById("strike-button-seven").disabled = false;
    checkClickCount();
  } else {
    alert("You have not completed all tasks yet.");
  }

});

failedButton.addEventListener("click", function() { 
  localStorage.clear("days");
  window.location.reload();
});

function checkClickCount() {
  if (clickCount === 7) {
    days++;
    localStorage.setItem("days", days);
    day.innerHTML = "Day " + days;
    clickCount = 0;
    if (days === 51) {
      alert("you finished project50!");
      //INSERT PRIZE FOR WINNING
    }
    
  } else {
    day.innerHTML = "Day " + days;
  }
}

document.addEventListener('DOMContentLoaded', function() {
  day.innerHTML = "Day " + days;
}, false);