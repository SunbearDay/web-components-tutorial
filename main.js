console.log('main.js loaded.')

const bb = document.querySelector('big-bang')
bb.addEventListener('click', changeCharacter)

function changeCharacter(event) {
    // User clicked on <big-bang> element.
    const bb = event.target
    bb.character = bb.character === 'Leonard' ? 'Sheldon' : 'Leonard'

    bb.color = bb.color === 'cornflowerblue' ? 'lightcoral' : 'cornflowerblue'
}