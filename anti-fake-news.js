'use strict'

const elementListeners = []

const img = ''


if (elementListeners.length) {
    elementListeners.forEach(el => {
        document.querySelector(el).addEventListener('DOMCharacterDataModified', (e) => {
            changeBg()
        })
    })
}
else {
    document.addEventListener('DOMCharacterDataModified', (e) => {
        document.querySelectorAll('*').forEach((el) => {
            if (img) {
                el.style.backgroundImage = `url("${img}")`, el.style.repeat = "repeat"
            }
            else {
                el.style.background = 'red';
            }
        })
    })
}


function changeBg() {
    document.body.style.backgroundImage = `url("${img}")`, document.body.style.repeat = "repeat"
}