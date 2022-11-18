'use strict'

const elementListeners = [
    '.class-selector',
    '#id-selector'
]

const img = ''

const originalTitle = document.querySelector('title').innerText

//Apply vaccine
elementListeners.forEach(el => {
    document.querySelector(el).addEventListener('DOMCharacterDataModified', (e) => {
        changeBg()
    })
})

function changeBg() {
    if (!checkIfTranslated())
        document.body.style.backgroundImage = `url("${img}")`, document.body.style.repeat = "repeat"
}

function checkIfTranslated() {
    //chrome
    if (document.querySelector('html').classList.contains('translated-ltr'))
        return true

    //edge
    if (document.querySelector('title').getAttribute('_msthash'))
        return true

    //others
    if (document.querySelector('title').innerText != originalTitle)
        return true

    return false;
}