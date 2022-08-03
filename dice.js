var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage = "images/dice" + randomNumber1 + ".png";

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomDiceImage);

/*******for img2 *********/

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomDiceImage2);




if (randomNumber1 == randomNumber2) {
    document.querySelector("h1").innerHTML = "Draw";
}
else if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩Player1 win";
}
else {
    document.querySelector("h1").innerHTML = "Player2 win🚩";
}
