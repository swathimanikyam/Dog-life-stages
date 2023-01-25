const progress = document.getElementById("progress")
const prev = document.getElementById("prev")
const next = document.getElementById("next")
const circles = document.querySelectorAll(".circle")
var imageNo= 0
    var ImageSources=[
    './1month puppy.jpg',
    './6month.jpg',
    './3 yrs.jpg',
    './last stage.jpg'
    ]


let currentActive = 1

next.addEventListener('click' , () => {
    currentActive++
    imageNo++
    document.getElementById("images").src = ImageSources[imageNo];

    if(currentActive > circles.length)
    {
        currentActive = circles.length
        imageNo = circles.length-1
    }
    update()
})

prev.addEventListener('click' , () => {
    currentActive--
    imageNo--
    document.getElementById("images").src = ImageSources[imageNo];
    if(currentActive < 1)
    {
        currentActive = 1
        imageNo = 0
    }
    update()
})


function update()
{
    circles.forEach((circle, idx) => {
        if(idx < currentActive) {
            circle.classList.add('active')
        }
        else{
            circle.classList.remove('active')
        }
    })
    const actives =  document.querySelectorAll(".active")

    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + "%"
    if(currentActive === 1){
        prev.disabled = true
    }else if(currentActive === circles.length){
        next.disabled =  true
    } else {
        prev.disabled = false
        next.disabled = false
    }
}

