let block = document.getElementById("block");
let scaleCoef = 1;
let rotateDeg = 0;

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

//size manipulation

let size = document.getElementById('size');

size.addEventListener('input', function () {
    scaleCoef = size.value
    block.style.transform = `scale(${scaleCoef}) rotate(${rotateDeg})`
})

//opacity manipulation

let opacity = document.getElementById('opacity');
opacity.addEventListener('input', function () {
    block.style.opacity = opacity.value;
})

// shape manipulation

let shape = document.getElementById('shape-select');
let okBtn = document.getElementById('btn-shape')

okBtn.addEventListener('click', function () {
    let option = shape.value;
    if (option === '1') {
        block.style.borderRadius = "0";
        rotateDeg = 0;
        block.style.transform = `scale(${scaleCoef}) rotate(${rotateDeg})`

    } else if (option === '2') {
        block.style.borderRadius = "50%"
        block.style.transform = `scale(${scaleCoef}) rotate(${rotateDeg})`
    } else if (option === '3') {
        block.style.borderRadius = "0"
        rotateDeg = 45 + "deg";
        block.style.transform = `scale(${scaleCoef}) rotate(${rotateDeg})`
    }
})

//hex manipulation

let hex = document.getElementById('hex');
hex.addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
        block.style.background = `#${hex.value}`
    }
})

// RGBA manipulation

let rgbaR = document.getElementById("r");
let rgbaG = document.getElementById("g");
let rgbaB = document.getElementById("b");
let rgbaA = document.getElementById("a");

let rgbaInputs = document.querySelectorAll(".rgba-container input");

rgbaInputs.forEach(function (element) {
    element.addEventListener('input', function () {
        block.style.background = `rgba(${rgbaR.value},${rgbaG.value},${rgbaB.value},${rgbaA.value})`
    })
})