var ctx;

function start() {
    console.log("take your time");

    //setInterval(tick, 10);
}

function tick() {
    if (isKeyPressed(65)) {
        ctx = new window.AudioContext();
        var osc = ctx.createOscillator();

        osc.type = "sine";
        osc.frequency.value = 440;
        osc.connect(ctx.destination);
        osc.start();
        console.log(osc);
    } else if (isKeyReleased(65)) ctx.close();
    clearKeyInput();
}