//grabbing panels
const panels = document.querySelectorAll('.panel')
//console.log(panels)

//add eventListener to each panel that would listen for a click
//remove active class and add active class to the panel on click

//iterrating over nodeList of panels
panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}