set() // init theme

function set(t = localStorage.getItem('theme') || 'light') {
    localStorage.setItem('theme', t)
    document.body.setAttribute('theme', t)
}

function toggle() {
    if (localStorage.getItem('theme') == 'light') {
        set('dark')
    } else {
        set('light')
    }
}

function get() {
    return localStorage.getItem('theme')
}


var themable = {
   get,
   set,
   toggle

}

export default themable