//conditional statement if/else
function getName() {
  var firstname = prompt("What is your name?", "");
  if (firstname.length === 0) {
    getName();
  } else {
    firstname.length != 0;
    alert("Hello " + firstname);
  }
}

document.getElementById("button1").addEventListener("click", getName);

//create an array, navigate using bracket notation, for loop, event listener to call function
let text = "";
function day() {
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  console.log("Day at index 4: " + weekdays[4]);
  for (var i = 0; i < weekdays.length; i++) {
    text += "Day: " + weekdays[i];
    alert(weekdays[i]);
  }
}
document.getElementById("button2").addEventListener("click", day);

//create an object, navigate using dot notation &bracket notation, event listener to call function

function picture() {
  const image = {
    mountains: 5,
    flowerColor: "purple",
    sky: "pink",
    sunny: true,
  };
  document.getElementById("square").innerHTML =
    "The flowers are " + image.flowerColor + ".";
  console.log("sky color: " + image.sky);
  console.log(image["mountains"]);
}

document.getElementById("button3").addEventListener("click", picture);

//add event listener different type
function changeColor() {
  document.getElementById("square").style.backgroundColor = "red";
  console.log("change square color");
}

document.getElementById("square").addEventListener("mouseover", changeColor);
