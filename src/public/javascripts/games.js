'use strict';
var init = function init() {
  getData();
};

localStorage.setItem("lang", "is");

var getData = function getData()  {
  ("#games").html(' ');
  $.get("http://apis.is/sports/football", function (data) {
    data.map(function (football) {
      $('#games').append("<tr><td>" + football.date + "</td><td>" + football.time + "</td><td>" + football.tournament + "</td><td>" + football.location + "</td><td>" + football.homeTeam + "</td><td>" + football.awayTeam + "</td><td>" + football.undefined + "</td></tr>");
    )}
  })};

init();
