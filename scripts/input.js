window.addEventListener("keydown", keyPressed);
window.addEventListener("keyup", keyReleased);

var heldKeys = [];
var pressedKeys = [];
var releasedKeys = [];

function keyPressed(e) {
    var k = e.keyCode;
    if (!isKeyHeld(k)) {
        heldKeys.push(k);
        pressedKeys.push(k);
    }
    tick();
}

function keyReleased(e) {
    var k  = e.keyCode;
    heldKeys.splice(heldKeys.indexOf(k), 1);
    releasedKeys.push(k);
    tick();
}

function isKeyHeld(k) {
    return heldKeys.includes(k);
}

function isKeyPressed(k) {
    return pressedKeys.includes(k);
}

function isKeyReleased(k) {
    return releasedKeys.includes(k);
}

function clearKeyInput() {
    pressedKeys = [];
    releasedKeys = [];
}