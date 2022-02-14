//Find elements
let container = document.querySelector(".container");
let counter = document.getElementById("count");

let count = 0;
let interval = setInterval(function() {
    count += 1;
    if (count === 3) {
        clearInterval(interval);
    }
    counter.innerText = "Display After "+count+" second";
}, 1000);

function loadCon() {
    container.style.transition = "all .5s linear";
    container.style.visibility = "visible";
    container.style.opacity = "1";
    container.style.transform = "translateY(-5%)";
}
setTimeout(loadCon, 3000);