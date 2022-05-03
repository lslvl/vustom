setTheme() // init theme

function setTheme(t = localStorage.getItem('theme')) {
    localStorage.setItem('theme', t)
    document.body.setAttribute('theme', t)
}

var themable = {
   theme: localStorage.getItem('theme'),
   setTheme
}

export default themable