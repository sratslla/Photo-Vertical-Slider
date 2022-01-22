const container = document.querySelector(".container")
const containerLeft = document.querySelector(".left-container")
const containerRight = document.querySelector(".right-container")
const upButton = document.querySelector(".button-up")
const downButton = document.querySelector(".button-down")
const slidesLength = containerRight.querySelectorAll("div").length

let activeSlideIndex = 0

containerLeft.style.top = `-${(slidesLength - 1) * 100}vh`

upButton.addEventListener("click", () => changeslide("up"))
downButton.addEventListener("click", () => changeslide("down"))

function changeslide(direction) {
    const sliderHeight = container.clientHeight
    if(direction === "up"){
        activeSlideIndex++
        if (activeSlideIndex > slidesLength - 1){
            activeSlideIndex = 0
        }
    }
    else if (direction === "down"){
        activeSlideIndex--
        if (activeSlideIndex < 0){
            activeSlideIndex = slidesLength - 1
        }
    }
    containerRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`
    containerLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`
}

var soundOne = $(".neji")[0];
$(".negi-div").mouseenter(function(){
    soundOne.play()
})