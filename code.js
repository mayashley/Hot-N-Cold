let magicNumber;

function guess() {
    const userGuess = document.getElementById("guess").value;
    console.log(userGuess);
    const difference =  Math.abs(userGuess - magicNumber)
    console.log(difference);
    message(difference);
}

function getSecretNumber() {
    magicNumber = Math.floor(Math.random() * 100);
    console.log("The magic number is", magicNumber);
};

function message(difference) {
    let newMessage = document.getElementById("output");
    console.log("The difference is", difference);
    
    if (difference === 0) {
        newMessage.innerHTML = "BINGO YOU GOT IT!";
    } else if(difference > 0 && difference <= 3) {
        newMessage.innerHTML = "ON FIRE!";
    } else if (difference > 3 && difference <= 5) {
        newMessage.innerHTML = "Getting Warmer";
    } else if (difference > 5 && difference <=10) {
        newMessage.innerHTML = "Warm";
    } else if (difference > 10 && difference <=20) {
        newMessage.innerHTML = "Cool";
    } else if (difference > 20 && difference <= 30) {
        newMessage.innerHTML = "The coolest";
    } else if (difference > 30) {
        newMessage.innerHTML = "Ice Cold";
    }

}
