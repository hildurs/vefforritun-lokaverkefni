let init = () => {
  getData();
};

//Notkun: getData(lang, arrivals)
//Fyrir: ekkert
//Eftir: búið er að hreinsa töfluna á forsíðunni
//      og skrifa út nú gögn sem sótt eru í gegnum API.
//      lang="en" eða lang="is" og type="arrivals" eða type="departures"

function getData() {
  $('#games-table').html(' ');
  $.get("http://apis.is/sports/football", function (data) {
    data.results.map(function (football) {
      $('#games-table').append("<tr><td>" + football.date + "</td><td>" + football.time + "</td><td>" + football.tournament + "</td><td>" + football.location + "</td><td>" + football.homeTeam + "</td><td>" + football.awayTeam + "</td>");
    });
  });
}

init();