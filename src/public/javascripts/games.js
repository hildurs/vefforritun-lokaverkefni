'use strict';
let init = () =>  {
   getData();
 }

 let getData = () => {
   $("#games").html(' ');
   $.get(`http://apis.is/sports/football`, (data) => {
     data.map((football) => {
       $('#games').append("<tr><td>" + football.date + "</td><td>" + football.time + "</td><td>" + football.tournament + "</td><td>" + football.location + "</td><td>" + football.homeTeam + "</td><td>" + football.awayTeam + "</td><td>" + football.undefined + "</td></tr>");
     });
   });
 }

 init();
