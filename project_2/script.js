const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');


//currentActive circle at 1
//add eventListener to next btn
//increment currentActive after click to move down the progress line
//make sure does not go above 4
//update the DOM
//loop through circles and for each circle 
//if index is less than currentActive add active class
//otherwise remove active class
//change width of progress element from 0-33%-66%-100%


let currentActive = 1

next.addEventListener('click', () => {
    currentActive++

    if (currentActive > circles.length) {
        currentActive = circles.length
    }

    update()
})

prev.addEventListener('click', () => {
    currentActive--
    if (currentActive < 1) {
        currentActive = circles.length
    }
    update()
})

function update() {
    circles.forEach((circle, idx) => {
        if (idx < currentActive) {
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }
    })

    const actives = document.querySelectorAll('.active')
    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%'
    
    if (currentActive === 1) {
        prev.disabled = true
    } else if(currentActive === circles.length) {
        next.disabled = true
    } else {
        prev.disabled = false
        next.disabled = false
    }
}
