let init = () => {
  getData("en", "arrivals");
  $("#komur").hide();
  $("#brottfarir").hide();

  $("#komur").click(function () {
    getData("is", "arrivals");
    $('#table-header').text("Keflavíkurflugvöllur komur");
    $('#table__head__date').text("Dags");
    $('#table__head__flightNumber').text("Flugnr.");
    $('#table__head__airline').text("Flugfélag");
    $('#table__head__to').text("Frá");
    $('#table__head__plannedArrival').text("Áætluð lending");
    $('#table__head__realArrival').text("Staða/lending");
  });

  $("#brottfarir").click(function () {
    getData("is", "departures");
    $('#table-header').text("Keflavíkurflugvöllur brottfarir");
    $('#table__head__date').text("Dags");
    $('#table__head__flightNumber').text("Flugnr.");
    $('#table__head__airline').text("Flugfélag");
    $('#table__head__to').text("Frá");
    $('#table__head__plannedArrival').text("Áætluð lending");
    $('#table__head__realArrival').text("Staða/Raun lending");
  });

  $("#arrivals").click(function () {
    getData("en", "arrivals");
    $('#table-header').text("Keflavíkurflugvöllur arrivals");
    $('#table__head__date').text("Date");
    $('#table__head__flightNumber').text("Flight Number");
    $('#table__head__airline').text("Airline");
    $('#table__head__to').text("From");
    $('#table__head__plannedArrival').text("Planned Arrival");
    $('#table__head__realArrival').text("Status/Real Arrival");
  });

  $("#departures").click(function () {
    getData("en", "departures");
    $('#table-header').text("Keflavíkurflugvöllur departures");
    $('#table__head__date').text("Date");
    $('#table__head__flightNumber').text("Flight Number");
    $('#table__head__airline').text("Airline");
    $('#table__head__to').text("From");
    $('#table__head__plannedArrival').text("Planned Arrival");
    $('#table__head__realArrival').text("Status/Real Arrival");
  });

  $("#islenska").click(function () {
    getData("is", "departures");
    $('#table-header').text("Keflavíkurflugvöllur brottfarir");
    $("#departures").hide();
    $("#arrivals").hide();
    $("#komur").show();
    $("#brottfarir").show();
  });

  $("#english").click(function () {
    getData("en", "departures");
    $('#table-header').text("Keflavíkurflugvöllur departures");
    $("#komur").hide();
    $("#brottfarir").hide();
    $("#departures").show();
    $("#arrivals").show();
  });
};

//Notkun: getData(lang, arrivals)
//Fyrir: ekkert
//Eftir: búið er að hreinsa töfluna á forsíðunni
//      og skrifa út nú gögn sem sótt eru í gegnum API.
//      lang="en" eða lang="is" og type="arrivals" eða type="departures"


let getData = (lang = "en", type = "departures") => {

  $('#flights-table').html(' ');
  $.get(`http://apis.is/flight?language=${ lang }&type=${ type }`, data => {
    data.results.map(flight => {
      if (type == "arrivals") {
        $('#flights-table').append(`<tr><td>${ flight.date }</td><td>${ flight.flightNumber }</td><td>${ flight.airline }</td><td>${ flight.from }</td><td>${ flight.plannedArrival }</td><td>${ flight.realArrival }</td>`);
      } else {
        $('#flights-table').append(`<tr><td>${ flight.date }</td><td>${ flight.flightNumber }</td><td>${ flight.airline }</td><td>${ flight.to }</td><td>${ flight.plannedArrival }</td><td>${ flight.realArrival }</td>`);
      }
    });
  });
};

init();