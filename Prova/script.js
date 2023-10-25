function zoomImg(image) {
    if (image.style.transform === 'scale(2)'){
        image.style.transform = 'scale(1)'
    } else {
        image.style.transform = 'scale(2)'
    }
}

