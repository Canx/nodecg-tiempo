function send(message) {
    nodecg.sendMessage(message);
}

function reset() {
    let minutes = Number(document.getElementById('minutes').value);
    let seconds = Number(document.getElementById('seconds').value);

    seconds = seconds + minutes*60;
    nodecg.sendMessage("reset", seconds);
}

function update_scoreboard(esgol) {
    data = {
        gol: esgol,
        local: {
            nombre: document.getElementById('localname').value,
            nombrelargo: document.getElementById('localnamelong').value,
            color: document.getElementById('localcolor').value,
            goles: document.getElementById('goleslocal').value},
        visitante: {
            nombre: document.getElementById('visitantename').value,
            nombrelargo: document.getElementById('visitantenamelong').value,
            color: document.getElementById('visitantecolor').value,
            goles: document.getElementById('golesvisitante').value}
    };

    console.log(data);
    nodecg.sendMessage("scoreboard", data);
}

function gol_local() {
    document.getElementById('goleslocal').value++;
    update_scoreboard(true);
}

function gol_visitante() {
    document.getElementById('golesvisitante').value++;
    update_scoreboard(true);
}

function show(cb) {
    nodecg.sendMessage("hide", cb.checked);
}

function showBig(cb) {
    nodecg.sendMessage("hideBig", cb.checked);
}

function showRoster(cb) {
    nodecg.sendMessage("hideRoster", cb.checked);
}