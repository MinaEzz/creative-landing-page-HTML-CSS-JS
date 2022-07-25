let mainImg = document.querySelector(".phone-img");
let container = document.querySelector(".container")
console.log(mainImg);
console.log(container);

function photoChange(psrc) {
    mainImg.src = psrc;
};
function backChange (color) {
    container.style.background = color;
};
