var currentState = 0;
function moveForward(params) {

    let carouselOne = document.querySelectorAll(".carouselItem")
    let carouselTwo = document.querySelectorAll(".container")
    if (currentState < carouselOne.length-1) {
        currentState++;
        carouselOne.forEach((elem) => {
            elem.style.transform = `translateX(${(currentState) * -100}%)`
        })
        carouselTwo.forEach((elem) => {
            elem.style.transform = `translateX(${(currentState) * -100}%)`
        })
        let prevActive = carouselOne[currentState-1].querySelector('img')
        let nxtActive = carouselOne[currentState].querySelector('img')
        prevActive.classList.remove('activeIMG')
        nxtActive.classList.add('activeIMG')
    }
    else {
        currentState=0;
        console.log(currentState)
        carouselOne.forEach((elem) => {
            elem.style.transform = `translateX(${(currentState) * -100}%)`
        })
        carouselTwo.forEach((elem) => {
            elem.style.transform = `translateX(${(currentState) * -100}%)`
        })
        let prevActive = carouselOne[carouselOne.length-1].querySelector('img')
        let nxtActive = carouselOne[currentState].querySelector('img')
        prevActive.classList.remove('activeIMG')
        nxtActive.classList.add('activeIMG')
    }
}
function moveBack(params) {
    let carouselOne = document.querySelectorAll(".carouselItem")
    let carouselTwo = document.querySelectorAll(".container")

    if (currentState > 0) {
        currentState--;
        carouselOne.forEach((elem) => {
            elem.style.transform = `translateX(${(currentState) * -100}%)`
        })
        carouselTwo.forEach((elem) => {
            elem.style.transform = `translateX(${(currentState) * -100}%)`
        })
        let prevActive = carouselOne[currentState+1].querySelector('img')
        let nxtActive = carouselOne[currentState].querySelector('img')
        prevActive.classList.remove('activeIMG')
        nxtActive.classList.add('activeIMG')
    }
    else {
        currentState=carouselOne.length-1;
        carouselOne.forEach((elem) => {
            elem.style.transform = `translateX(${(currentState) * -100}%)`
        })
        carouselTwo.forEach((elem) => {
            elem.style.transform = `translateX(${(currentState) * -100}%)`
        })
        let prevActive = carouselOne[0].querySelector('img')
        let nxtActive = carouselOne[currentState].querySelector('img')
        prevActive.classList.remove('activeIMG')
        nxtActive.classList.add('activeIMG')
    }

}





// var currentState = 0;
// function moveForward(params) {

//     let carouselOne = document.querySelectorAll(".carouselItem")
//     if (currentState < carouselOne.length-1) {
//         currentState++;
//         carouselOne.forEach((elem) => {
//             elem.style.transform = `translateX(${(currentState) * -100}%)`
//         })
//         carouselOne[currentState-1].classList.remove('activeIMG')
//         carouselOne[currentState].classList.add('activeIMG')
//     }
//     else {
//         currentState=0;
//         console.log(currentState)
//         carouselOne.forEach((elem) => {
//             elem.style.transform = `translateX(${(currentState) * -100}%)`

//         })
//     }
// }
// function moveBack(params) {
//     let carouselOne = document.querySelectorAll(".carouselItem")
//     if (currentState > 0) {
//         currentState--;
//         carouselOne.forEach((elem) => {
//             elem.style.transform = `translateX(${(currentState) * -100}%)`

//         })
//     }
//     else {
//         currentState=carouselOne.length-1;
//         carouselOne.forEach((elem) => {
//             elem.style.transform = `translateX(${(currentState) * -100}%)`
//         })
//     }

// }