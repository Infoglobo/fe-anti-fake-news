'use strict'

const elementListeners = [
    '.title h1',
    '.content-head__subtitle'
]

const img = 'https://s3.glbimg.com/v1/AUTH_d0df7b2a29084a86bbc7426a0709d06a/generic/anti-fake-news/fake.jpg'

elementListeners.forEach(el => {
    console.log(el);
    document.querySelector(el).addEventListener('DOMCharacterDataModified', (e) => {
        changeBg()
        //console.log(e)
    })
})

function changeBg() {
    console.log('aquiii');
    document.body.style.backgroundImage = `url("${img}")`, document.body.style.repeat = "repeat"
}