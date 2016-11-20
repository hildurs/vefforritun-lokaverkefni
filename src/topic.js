function myFunction() {
    var x;
    if (confirm("Ertu viss um að þú viljir vista umræðuþráðinn?") == true) {
      setTimeout( function ( ) { alert( "moo" ); }, 10000 );
        x = "Umræðuþráður hefur verið vistaður!";
    } else {
        x = "Umræðuþráður var ekki vistaður!";
    }
    document.getElementById("ave-topi").innerHTML = x;
}
