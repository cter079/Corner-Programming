
let body = document.body;
let background = new Image;
background.classList.add('background')
background.src = 'https://i.pinimg.com/originals/d8/39/74/d839742a057e1d111d0373fa614de906.jpg';
body.appendChild(background)

let logo = new Image;
logo.classList.add('logo');
logo.src = moonImage;
body.appendChild(logo);

// let title = document.createElement('h1');
// title.innerHTML = "Leren Spellen";
// title.classList.add('title');
// body.appendChild(title);


let buttonclass = document.createElement('div');
buttonclass.classList.add('buttonclass');
body.appendChild(buttonclass)


let button = document.createElement('button')
button.innerHTML = "Start game";
button.classList.add('button');
buttonclass.appendChild(button);


let button2 = document.createElement('button')
button2.innerHTML = "Tutorial";
button2.classList.add('button');
buttonclass.appendChild(button2);

let button3 = document.createElement('button')
button3.innerHTML = "Credits";
button3.classList.add('button');
buttonclass.appendChild(button3);


let exitButton = new Image;
exitButton.src = "https://www.pngall.com/wp-content/uploads/4/Cancel-Button-PNG-Free-Download.png";
exitButton.classList.add("not-active");
body.appendChild(exitButton);

let audioMute = document.createElement('div');
audioMute.classList.add("audio");
body.appendChild(audioMute);

let buttonClick = 0

menuSong.play();
let audioclick = 0
audioMute.addEventListener('click', function () {
    if (audioclick >= 1) {
        menuSong.play();
        audioclick--
        audioMute.classList.remove("audiomute");

    } else {
        menuSong.pause();
        audioclick++
        audioMute.classList.add("audiomute");
    }
})

buttonclass.addEventListener('click', function () {
    if (buttonClick >= 1) {
        buttonClick = 0
    }

    else {
        window.close()
        window.open("game.html")

        button.classList.add('not-active')
        button2.classList.add('not-active')
        button3.classList.add('not-active')
        background.classList.add('not-active')
        title.classList.add('not-active')
        logo.classList.add('not-active')
        buttonClick++
        menuSound.play();
        menuSong.pause();
        exitButton.classList.remove("not-active");

        exitButton.classList.add("active");

    }
})

buttonclass.addEventListener('mouseover', function () {
    menuScrolling.play();

})

exitButton.addEventListener('click', function () {
    buttonClick = 0
    button.classList.remove('not-active')
    button2.classList.remove('not-active')
    button3.classList.remove('not-active')
    background.classList.remove('not-active')
    title.classList.remove('not-active')
    logo.classList.remove('not-active')
    menuSong.play();
    exitButton.classList.add("not-active");
})
