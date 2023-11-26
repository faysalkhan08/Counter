const decreaseBtn = document.querySelector(".decrease")
const increaseBtn = document.querySelector(".increase")
const resetBtn = document.querySelector(".reset")
const counterCon = document.querySelector("div")

function decreasing () {
    let counterValue = counterCon.textContent
    if (counterValue == 0) {
        counterValue = 0
    } else {
        counterValue -= 1
    }
    counterCon.textContent = counterValue
}

function increasing () {
    let counterValue = counterCon.textContent
    counterValue++
    counterCon.textContent = counterValue
}

function reset () {
    let counterValue = counterCon.textContent
    counterValue = 0
    counterCon.textContent = counterValue
}

decreaseBtn.addEventListener("click", decreasing)
increaseBtn.addEventListener("click", increasing)
resetBtn.addEventListener("click", reset)