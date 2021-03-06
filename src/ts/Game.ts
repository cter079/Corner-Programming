import menuClick from "url:../sound/menu.mp3";
import menuScroll from "url:../sound/menuscroll.mp3";
import backgroundSong from "url:../sound/song.mp3";

//Alles hieronder door Milan. Op een paar dingen aangegeven na (Audio buttons)

//Corné
let menuSong = new Audio(backgroundSong);
let menuSound = new Audio(menuClick);
let menuScrolling = new Audio(menuScroll);
menuSong.volume = 0.4;
menuScrolling.volume = 1;

let body = document.body;
let backgroundImage = new Image;
backgroundImage.classList.add('background')
backgroundImage.src = 'https://img.freepik.com/free-vector/game-landscape-with-tropical-plants_105738-749.jpg';
body.appendChild(backgroundImage)

let logo = document.createElement('img');
logo.src = "https://s8.gifyu.com/images/Coin-animatie.gif";
logo.classList.add('logo');
body.appendChild(logo);

let gameTitle = document.createElement('h1');
gameTitle.innerHTML = "Leren Spellen";
gameTitle.classList.add('title');
body.appendChild(gameTitle);


let buttonWrapper = document.createElement('div');
buttonWrapper.classList.add('buttonclass');
body.appendChild(buttonWrapper)


let startButton = document.createElement('button')
startButton.innerHTML = "Start game";
startButton.classList.add('button');
buttonWrapper.appendChild(startButton);


let tutorialButton = document.createElement('button')
tutorialButton.innerHTML = "Tutorial";
tutorialButton.classList.add('button');
buttonWrapper.appendChild(tutorialButton);

let creditsButton = document.createElement('button')
creditsButton.innerHTML = "Credits";
creditsButton.classList.add('button');
buttonWrapper.appendChild(creditsButton);


let exitButton = new Image;
exitButton.src = "https://www.pngall.com/wp-content/uploads/4/Cancel-Button-PNG-Free-Download.png";
exitButton.classList.add("not-active");
body.appendChild(exitButton);

//Corné
let audioMute = document.createElement('div');
audioMute.classList.add("audio");
body.appendChild(audioMute);

let buttonClick = 0

menuSong.play();
let audioclick = 0

//Corné
audioMute.addEventListener('click', function () {
    if (audioclick >= 1) {
        menuSong.play();
        menuSong.loop= true;

        audioclick--
        audioMute.classList.remove("audiomute");

    } else {
        menuSong.pause();
        audioclick++
        audioMute.classList.add("audiomute");
    }
})
// Vanaf hier Milan
startButton.addEventListener('click', function () {
    if (buttonClick >= 1) {
        buttonClick = 0
    }

    else {
        window.close();
        window.open("game.html");

        startButton.classList.add('not-active')
        tutorialButton.classList.add('not-active')
        creditsButton.classList.add('not-active')
        backgroundImage.classList.add('not-active')
        gameTitle.classList.add('not-active')
        logo.classList.add('not-active')
        buttonClick++
        menuSound.play();
        menuSong.pause();
        exitButton.classList.remove("not-active");

        exitButton.classList.add("active");

    }
})

creditsButton.addEventListener('click', function(){
    window.open("r1-row-one.com")
})

buttonWrapper.addEventListener('mouseover', function () {
    menuScrolling.play();

})

exitButton.addEventListener('click', function () {
    buttonClick = 0
    startButton.classList.remove('not-active')
    tutorialButton.classList.remove('not-active')
    creditsButton.classList.remove('not-active')
    backgroundImage.classList.remove('not-active')
    gameTitle.classList.remove('not-active')
    logo.classList.remove('not-active')
    menuSong.play();
    menuSong.loop = true
    exitButton.classList.add("not-active");
})










