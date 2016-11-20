let init = () => {
  getData();
}


//Notkun: getData(lang, arrivals)
//Fyrir: ekkert
//Eftir: búið er að hreinsa töfluna á forsíðunni
//      og skrifa út nú gögn sem sótt eru í gegnum API.
//      lang="en" eða lang="is" og type="arrivals" eða type="departures"

function getData() {
  $('#results-table').html(' ');
  $.get("http://apis.is/sports/football", function (data) {
    data.results.map(function (football) {
      if(football.undefined !=undefined) {
        $('#results-table').append("<tr><td>" + football.date + "</td><td>" + football.homeTeam + "</td><td>" +football.awayTeam + "</td><td>" + football.undefined + "</td>");
    }});
  });
}




init();
