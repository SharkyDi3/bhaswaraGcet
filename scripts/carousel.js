let carouseldiv = document.getElementById('carousel');
let next = document.getElementById('next')
let prev = document.getElementById('prev')
let img = document.getElementById('carouselimg')

let imgsrcs = [
    '1651422034307.jpg',
    '1651422035046.jpg',
    '1651475161908.jpg',
    '1651475161947.jpg',
    '20220429051839_IMG_4936.jpg',
    'DSC_0026.jpg',
    'IMG_1287.JPG'
]

let cindex = 0
let isPaused = false

let imgchange = () => {
    img.setAttribute('src', `images/${imgsrcs[cindex]}`)
    clearInterval(timer);
    timer = setInterval(()=> {
        if (!isPaused) imgnext();
    }, 4000)
}

let imgnext = () => {
    cindex = (cindex + 1) % imgsrcs.length;
    imgchange();
}

let imgprev = () => {
    cindex = (cindex - 1) % imgsrcs.length;
    imgchange();
}

carouseldiv.onmouseenter = () => {isPaused = true}
carouseldiv.onmouseleave = () => {isPaused = false}

var timer = setInterval(()=> {
    if (!isPaused) imgnext();
}, 3000)

next.onclick = imgnext;

prev.onclick = imgprev;