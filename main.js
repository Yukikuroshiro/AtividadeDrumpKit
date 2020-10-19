'use strict';

const container = document.querySelector('#container');

const sounds = [
    { 'id': '0', 'key': 'a', 'sound': './sounds/clap.wav' },
    { 'id': '1', 'key': 's', 'sound': './sounds/boom.wav' },
    { 'id': '2', 'key': 'd', 'sound': './sounds/tom.wav' },
    { 'id': '3', 'key': 'f', 'sound': './sounds/ride.wav' },
    { 'id': '4', 'key': 'g', 'sound': './sounds/snare.wav' },
    { 'id': '5', 'key': 'h', 'sound': './sounds/hihat.wav' },
    { 'id': '6', 'key': 'z', 'sound': './sounds/openhat.wav' }
];

const loadSounds = (sounds, container) => {
    sounds.forEach(sounds => {
        container.innerHTML += `
            <div class='containers' id='${sounds.id}'>
                ${sounds.key}
                <audio src='${sounds.sound}'></audio>
            </div>
        `
    })
}

loadSounds(sounds, container);
let caixas = document.querySelectorAll('.containers');


const clickSound = (event) => {
    if (event.target.id != 'container') {
        let somClickado = event.target.id
        audio[somClickado].play()
    }
}

const keySound = (event) => {
    let tecla = event.key;
    sounds.forEach(sounds => {
        if (tecla == sounds.key) {
            console.log(tecla);
            audio[sounds.id].play();
        }
    })

}


const audio = document.querySelectorAll('audio');
container.addEventListener('click', clickSound);
document.querySelector('body').addEventListener('keydown', keySound);

// caixa1.addEventListener('click', function() {
//     audio[0].play()
// })

// caixa2.addEventListener('click', function() {
//     audio[1].play()
// })

// caixa3.addEventListener('click', function() {
//     audio[2].play()
// })
// caixa4.addEventListener('click', function() {
//     audio[3].play()
// })