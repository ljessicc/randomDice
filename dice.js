var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage = "dice" + randomNumber1 + ".png";
randomIMageSource = "assets/images/" + randomDiceImage;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomIMageSource);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomIMageSource2 = "assets/images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomIMageSource2);

if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "🚩🎊Player 1 takes the Win!";
}else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 takes the Win!🎊🚩";
}else {document.querySelector("h1").innerHTML = "🚩It's a draw🚩"}