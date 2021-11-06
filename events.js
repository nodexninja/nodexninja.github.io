const scroll = document.getElementById('scroll')
const nav = document.getElementById('nav')
const ghosts = document.getElementsByClassName('hidden')
const skeles = document.getElementsByClassName('skele')
function youtube() {
  window.open(`https://www.youtube.com/channel/UC4c4iyvuy3vjBL9ffZ2928A?sub_confirmation=1`, `_blank`)
}
function server() {
  window.open(`https://bit.ly/nodexcode`, `_blank`)
}
function load() {
  setTimeout(function() {
    while (ghosts.length) {
      ghosts[0].classList.remove('hidden')
    }
    while (skeles.length) {
      skeles[0].classList.remove('skele')
    }
    console.log('Loaded site...')
  }, 1000)
}