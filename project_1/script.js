//grabbing panels
const panels = document.querySelectorAll('.panel')
//console.log(panels)

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