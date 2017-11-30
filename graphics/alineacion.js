nodecg.listenFor('hideRoster', checked => {
    document.getElementById("alineacion").className = checked ? "animated fadeInRight" : "animated fadeOutRight";
})