const musicNoteDisplay = document.querySelector('.music-note')
const frequencyDisplay = document.querySelector('.frequency')

let frequency = 440 // A4

function convert_to_music_note(frequency){

}

musicNoteDisplay.innerHTML = convert_to_music_note(frequency)

// Find the slope of frequencies plotted by octaves of A

// const x1 = 4
// const x2 = 5

// const y1 = 440 // A4
// const y2 = 880 // A5

const x1 = 3
const x2 = 5

const y1 = 220
const y2 = 880

let m = (y2 - y1) / (x2 - x1)
console.log(m)