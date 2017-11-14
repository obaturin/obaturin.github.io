let hamburgerMenu = document.getElementById('toggle')
let overlay = document.getElementById('overlay')
let hamburgerMenuOverlay = document.getElementById('toggle_back')

// console.log(overlay)

hamburgerMenu.addEventListener('click', function() {
    overlay.classList.add('overlay_active')
    // console.log(overlay)
})

hamburgerMenuOverlay.addEventListener('click', function() {
    overlay.classList.remove('overlay_active')
    // console.log(overlay)
})
