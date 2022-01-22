function createBubble(){
    const bloodGroup = document.querySelector(".blood-group")
    const createElement = document.createElement("span")

    var size = Math.random() * 60
    const img = document.createElement('IMG')

    createElement.style.width = size + "px"
    createElement.style.height = size + "px"
    createElement.style.left = Math.random() * innerWidth + "px"
    bloodGroup.appendChild(createElement)
    img.setAttribute('src', 'https://www.clipartmax.com/png/middle/29-291445_blood-drop-png-image-blood-drop-clipart.png');
    img.setAttribute('class', 'bloodimage');
    createElement.appendChild(img)

    setTimeout(() => {
        createElement.remove()
    },4000)
}
setInterval(createBubble,50)