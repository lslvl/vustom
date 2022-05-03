var medias = ['mobile', 'phablet', 'tablet', 'laptop', 'desktop', 'tv']

function media() {
    new ResizeObserver(onResize).observe(document.body)
}

function onResize() {
    let container = document.body
    if (container) {
        let width = container.offsetWidth
        if (width <= 480) {
            setMediaAttribute(medias[0])
        } else if (width > 481 && width <= 639) {
            setMediaAttribute(medias[1])
        } else if (width > 639 && width <= 768) {
            setMediaAttribute(medias[2])
        } else if (width > 769 && width <= 1024) {
            setMediaAttribute(medias[3])
        } else if (width > 1025 && width <= 1200) {
            setMediaAttribute(medias[4])
        } else {
            setMediaAttribute(medias[5])
        }
    }
}

function setMediaAttribute(media) {
    for (let i = 0; i < medias.length; i++) {
        if (medias[i] == media) {
            document.body.setAttribute(media, '')
        } else {
            document.body.removeAttribute(medias[i])
        }
    }
}

export default media