'use strict'

const elementListeners = [
    '.class-selector',
    '#id-selector'
]

const img = ''

elementListeners.forEach(el => {
    console.log(el);
    document.querySelector(el).addEventListener('DOMCharacterDataModified', (e) => {
        changeBg()
        //console.log(e)
    })
})

function changeBg() {
    document.body.style.backgroundImage = `url("${img}")`, document.body.style.repeat = "repeat"
}