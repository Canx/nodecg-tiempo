nodecg.listenFor('scoreboard', data => {
    update_scoreboard(data);
});

nodecg.listenFor('hideBig', checked => {
    document.getElementById("bigscore").className = checked ? "animated fadeInUp" : "animated fadeOutDown";
})

function update_scoreboard(data) {
    console.log(data);

    document.getElementById("localGoles").innerHTML = data.local.goles;
    document.getElementById("local").style["border-color"] = data.local.color;
    document.getElementById("local").innerHTML = data.local.nombrelargo;
    document.getElementById("visitanteGoles").innerHTML = data.visitante.goles;
    document.getElementById("visitante").style["border-color"] = data.visitante.color;
    document.getElementById("visitante").innerHTML = data.visitante.nombrelargo;
}