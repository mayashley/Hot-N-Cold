let magicNumber;

let bodyContainer = document.getElementById("bodyid");

function guess() {
  const userGuess = document.getElementById("guess").value;
  console.log(userGuess);
  const difference = Math.abs(userGuess - magicNumber);
  console.log(difference);
  message(difference);
}

function getSecretNumber() {
  magicNumber = Math.floor(Math.random() * 100);
  console.log("The magic number is", magicNumber);
}

function message(difference) {
  let newMessage = document.getElementById("output");
  console.log("The difference is", difference);

  if (difference === 0) {
    newMessage.innerHTML = "WINNER!";
    bodyContainer.style.backgroundImage =
      "linear-gradient(to top, #DED406 , #FB6605, #C20606)";
  } else if (difference > 0 && difference <= 3) {
    newMessage.innerHTML = "SUPER HOT!";
    bodyContainer.style.backgroundImage =
      "linear-gradient(to top, #DED406, #FB6609, #FB6605)";
  } else if (difference > 3 && difference <= 5) {
    newMessage.innerHTML = "Getting Warmer";
    bodyContainer.style.backgroundImage =
      "linear-gradient(to top, #DED406, #DED412, #FB6609)";
  } else if (difference > 5 && difference <= 10) {
    newMessage.innerHTML = "Warm";
    bodyContainer.style.backgroundImage =
      "linear-gradient(to top, #DED406, #DED412, #F2B110)";
  } else if (difference > 10 && difference <= 20) {
    newMessage.innerHTML = "Cool";
    bodyContainer.style.backgroundImage =
      "linear-gradient(to top, #91BEC2, #8BD4DA, #43E9F7)";
  } else if (difference > 20 && difference <= 30) {
    newMessage.innerHTML = "The coolest";
    bodyContainer.style.backgroundImage =
      "linear-gradient(to top, #91BEC2, #43E9F7, #29D2DF)";
  } else if (difference > 30) {
    newMessage.innerHTML = "Ice Cold";
    bodyContainer.style.backgroundImage =
      "linear-gradient(to top, #5CD8E3, #43E9F7, #058F9B)";
  }
}

const input = document.getElementById("guess");
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("btn").click();
  }
});
