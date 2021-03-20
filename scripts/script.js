let nodes = [];

let noteKeys = [65, 87, 83, 69, 68, 82, 70, 84, 71, 89, 72, 85, 74, 73, 75, 79, 76, 80, 192, 222];
let freqs = [];

function start() {
    console.log("take your time");

    for (let i = 0; i <= 19; i++) freqs.push(440*Math.pow(2,i/19.0));

    //setInterval(tick, 10);
}

function tick() {
    clearKeyInput();
}

function playNote(key = "a") {
    if (!noteKeys.includes(key)) return;
    let ctx = new window.AudioContext();
    let osc = ctx.createOscillator();

    osc.type = "sine";
    osc.frequency.value = freqs[noteKeys.indexOf(key)];
    osc.connect(ctx.destination);
    osc.start();

    nodes.push({
        key: key,
        ctx: ctx
    });
}

function endNote(key) {
    if (!noteKeys.includes(key)) return;
    let j = 0;
    for (let i = 0; i < nodes.length; i++) if (nodes[i].key == key) {
        j = i;
        break;
    }

    nodes[j].ctx.close();
    nodes.splice(j, 1);
}