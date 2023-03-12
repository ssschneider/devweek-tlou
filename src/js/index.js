const btnCarousel = document.querySelectorAll(".btn")
const images = document.querySelectorAll(".image")

const removeSelectedBtn = () => {
    const selectedBtn = document.querySelector(".selected")
        selectedBtn.classList.remove("selected")
}

const selectBtn = (btn) => {
    btn.classList.add("selected")
}

const hidePreviousImage = () => {
    const activeImage = document.querySelector(".active")
    activeImage.classList.remove("active")
}

const showCurrentImage = (index) => {
    images[index].classList.add("active")
}

btnCarousel.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        removeSelectedBtn()
        selectBtn(btn)
        hidePreviousImage()
        showCurrentImage(index)
    })
})