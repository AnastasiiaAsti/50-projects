//grabbing all boxes and making a node list
const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', checkBoxes) 

checkBoxes()

function checkBoxes() {
    const triggerButtom = window.innerHeight / 5 * 4;

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top
        //(https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect) The Element.getBoundingClientRect() method returns a DOMRect object providing information about the size of an element and its position relative to the viewport.
        if (boxTop < triggerButtom) {
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }

    })
}