let number = Math.floor((Math.random() * 100) + 1);
document.getElementById("btn").addEventListener("click", guessNumber);

document.getElementById("inp")
    .addEventListener("keyup", function(event) {
        event.preventDefault();
        if (event.keyCode === 13)
            guessNumber();
    });

let counter = 0;

document.getElementById('inp').focus();

function guessNumber() {
    let userInputNumber = document.getElementById("inp");
    let resultLabel = document.getElementById("res");
    let guessCountLabel = document.getElementById("count");

    if (userInputNumber.value == number) {
        alert("You are the winner :D. You guest after " + ++counter + " times!");
        const choice = confirm("Again?");
        if (choice) {
            counter = 0;
            number = Math.floor((Math.random() * 100) + 1);
            userInputNumber.innerText = "";
        } else {
            alert("Thanks for playing!!");
            resultLabel.innerText = ("Best guess time " + counter);
            guessCountLabel.innerText = "";
        }
    } else if (userInputNumber.value == "") {
        resultLabel.innerText = "Are you sure that this is a number?";
    } else if (userInputNumber.value < number) {
        counter++
        resultLabel.innerText = "I am thinking about higher number";
    } else if (userInputNumber.value > number) {
        counter++
        resultLabel.innerText = "I am thinking about lower number";
    } else if (isNaN(userInputNumber.value)) {
        resultLabel.innerText = "Write the number";
    }
    guessCountLabel.innerText = ("This is your test number:" + counter);
    userInputNumber.value = '';
}