let comp;
let userGuess = [];
let userUpdate = document.getElementById("suggest")
let enterUpdate = document.getElementById("inputNum");
// console.log(typeof(userGuess))
const init = () => {
    comp = Math.floor((Math.random() * 100) + 1);
    // console.log(comp)
    document.getElementsByClassName("gameArea")[0].style.display = "none"
}

const startGame = () => {
    document.getElementsByClassName("gameArea")[0].style.display = "block"
    document.getElementsByClassName("container")[0].style.display = "none"
}
const disable = () => {
    enterUpdate.setAttribute("disabled", true);
}
const newGame = () => {
    // audio3.play();
    // document.getElementsByClassName("gameArea")[0].style.display = "none"
    // document.getElementsByClassName("container")[0].style.display = "block"
    // document.getElementById("att2").innerHTML = "0"
    // document.getElementById("suggest").innerText = "Enter your guess"
    // document.getElementById("att1").innerHTML = "0"
    // userGuess = []
    // enterUpdate.setAttribute(e, true);
    window.location.reload();
}
let audio = new Audio("click-47609.mp3")
let audio2 = new Audio("sound11..wav")
let audio3 = new Audio("stop-13692.mp3")
const compareGuess = () => {
    const enter = Number(document.getElementById("inputNum").value)
    // const enter = Number(document.getElementById("inputNum").value)
    userGuess = [...userGuess, enter]
    document.getElementById("att2").innerHTML = userGuess;
    if (userGuess.length < maxGuess) {
        if (enter > comp) {
            audio2.play()
            userUpdate.innerHTML = "your guess is high"
            enterUpdate.value = "";
        } else if (enter < comp) {
            audio2.play()
            userUpdate.innerHTML = "your guess is low"
            enterUpdate.value = "";
        } else {
            userUpdate.innerHTML = "you win!"
            audio.play()
            disable();
            enterUpdate.value = "";
        }
    } else {
        if (enter > comp) {
            audio2.play()
            userUpdate.innerHTML = `you lose!! correct number is ${comp}`
            enterUpdate.value = "";
            disable();
        } else if (enter < comp) {
            audio2.play()
            userUpdate.innerHTML = userUpdate.innerHTML = `you lose!! correct number is ${comp}`
            enterUpdate.value = "";
            disable();
        } else {
            userUpdate.innerHTML = "you win***"
            audio.play()
            disable();
            enterUpdate.value = "";
        }
    }
    document.getElementById("att1").innerHTML = userGuess.length;

    //      document.getElementById("input").innerHTML="Max attemp reach"
}
// console.log(typeof(userGuess))
// console.log(comp>enter)
easymod = () => {
    maxGuess = 10;
    startGame();
    audio3.play();
}
hardmod = () => {
    maxGuess = 5;
    startGame();
    audio3.play();
}

