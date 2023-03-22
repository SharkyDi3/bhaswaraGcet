
var navbar = document.querySelector('nav')
navbar.style.backgroundColor = "black"

function getRandColor() {
    var letters = "0123456789ABCDEF"
    var color = "#"

    for(let i=0;i<6;i++) {
        color += letters[Math.floor(Math.random()*16)]
    }
    return color
}

function changeHeaderColor() {
    colorInput = getRandColor()
    navbar.style.backgroundColor = colorInput
}


setInterval("changeHeaderColor()",500)