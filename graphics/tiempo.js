var sec = 0;
var id;

nodecg.listenFor('start', message => {
    start();
});

nodecg.listenFor('stop', message => {
    stop();
});

nodecg.listenFor('reset', seconds => {
    reset(seconds);
});

function reset(s) {
   stop();
   setTime(s)
}

function stop() {
   if (id) {
      clearInterval(id);
   }
}   

function pad ( val ) { return val > 9 ? val : "0" + val; }

function start() {
   stop();
   id = setInterval( function(){
      setTime(sec)
   }, 1000)
}

function setTime(newSec) {
   sec=newSec;
   document.getElementById("seconds").innerHTML=pad(sec%60);
   document.getElementById("minutes").innerHTML=pad(parseInt(sec/60,10));
   sec++
}

