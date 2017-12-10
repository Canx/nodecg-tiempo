nodecg.listenFor('hideRoster', checked => {
    document.getElementById("alineacion").className = checked ? "animated fadeInRight" : "animated fadeOutRight";
});

// Load team data from json file
let request = new XMLHttpRequest();

request.onload = onLoad;
request.open("get", "local.json", true);
request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
request.send();

function onLoad() {
   team = JSON.parse(request.response);
   loadTeamTable(team);

}
function loadTeamTable(team) {
  console.log(request.response)

  // set team name and logo
  // BUG: team name is not replaced!
  name = document.getElementById("teamname");
  name.innerHTML = team.name;
  logo = document.getElementById("logo");
  logo.setAttribute("src", team.logo);


  // set player numbers and names
  table = document.getElementById("alineacion");
  team.players.forEach(function(player) {
    row = table.insertRow(-1);
    row.insertCell(0).innerHTML = player.number;
    row.insertCell(1).innerHTML = player.name;
  });
  
  console.log(team);

}

