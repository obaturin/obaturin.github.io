let hamburgerMenu = document.getElementById('toggle')
let overlay = document.getElementById('overlay')

// console.log(overlay)

hamburgerMenu.addEventListener('click', function() {
    overlay.classList.add('overlay_active')
    // console.log(overlay)
})

