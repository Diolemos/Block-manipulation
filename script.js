let block = document.getElementById("block");

// Position Y manipulation

let posY = document.getElementById("pos-y");

posY.addEventListener('input', function () {
    block.style.top = posY.value + "px"
})