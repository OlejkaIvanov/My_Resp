function temp() {
    var t = +document.getElementById('t').value;
    for (var i = 0; i < 1; i++) {
      var a = (t + i) + " ==== "+ (t+i) * (1 / 58) + "<br>";
      document.write(a); 
    }
  }