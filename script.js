let block = document.getElementById("block");

// Position Y manipulation

let posY = document.getElementById("pos-y");

posY.addEventListener('input', function () {
    block.style.top = posY.value + "px"
})

// Position X manipulation

let posX = document.getElementById('pos-x');

posX.addEventListener('input', function () {
    block.style.left = posX.value + "px";
})