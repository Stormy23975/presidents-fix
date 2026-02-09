import {presidents} from '/data/presidents.js'
console.log(presidents)

const imgPath = "https://resources.dgmuvu.com/presidents/"
const cardPointer = document.querySelector('#cards')



for (let x = 0; x < presidents.length; x++){
    let barDiv = document.createElement('div')
    barDiv.innerHTML = `<p>${presidents[x].name}</p>`

    let myImage = document.createElement('img')
    myImage.setAttribute("src", imgPath + presidents[x].photo)
    myImage.setAttribute("alt", presidents[x].name)

    let caption = document.createElement('figcaption')
    caption.innerHTML = `Served ${presidents[x].took_office} to ${presidents[x].left_office}<br>Born ${presidents[x].born}, Died ${presidents[x].died}<br>Party: ${presidents[x].party}`

    let figure = document.createElement('figure')
    figure.appendChild(barDiv)
    figure.appendChild(myImage)
    figure.appendChild(caption)

    cardPointer.appendChild(figure)
}