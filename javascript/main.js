// input nome utente
var nomeP = document.getElementById('name')
// input km utente
var kmP = document.getElementById('km')
// input età utente
var etaP = document.getElementById('eta')
// bottone genera
var generaButton = document.getElementById('genera')
// bottone annulla
var annullaButton = document.getElementById('annulla')
// click bottone
generaButton.addEventListener("click",

  function () {

    // salvo il valore degli imput

    var valnome = nomeP.value;
    var valkm = kmP.value;
    var valeta = etaP.value;

    // li stampo in console

    console.log(valnome,valkm,valeta)

    // mostro la parte sotto se compilata giusta

    if (valeta > 0 & valkm > 0 & valnome !== "") {
      var mostra = document.getElementById('bottom')
      mostra.className = "mostra";
    }else {
      var nascondi = document.getElementById('bottom')
      nascondi.className = "nascondi"
      alert("compila in modo corretto")
    }

    // calcolare costo biglietto + offerta

    var offerta
    var costoB
    if (valeta < 18) {
      offerta = "Biglietto Sconto Minorenne"
      costoB = valkm * 0.15
    }else if (valeta > 64) {
      offerta = "Biglietto Sconto OVER 65"
      costoB = valkm * 0.12
    }else {
      offerta = "Biglietto Standard"
      costoB = valkm * 0.21
    }

    console.log(costoB);

    // codice CP e carrozza casuali

    var carrozza = Math.floor(Math.random()*9)+1
    var codiceCP = Math.floor(Math.random()*9999)+1

    // li stampo a schermo

    document.getElementById('nomePasseggero').innerHTML = valnome
    document.getElementById('offerta').innerHTML = offerta
    document.getElementById('costoBiglietto').innerHTML = costoB.toFixed(2) + "€"
    document.getElementById('carrozza').innerHTML = carrozza
    document.getElementById('codiceCP').innerHTML = codiceCP


  }
)


// click annulla
annullaButton.addEventListener("click",
  function () {
    valnome = nomeP.value = "";
    valkm = kmP.value = "";
    valeta = etaP.value = "";
    var nascondi = document.getElementById('bottom')
    nascondi.className = "nascondi"
    console.log(valnome, valkm, valeta);
}
)
