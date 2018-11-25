var haslo = "code is cheap";
haslo = haslo.toUpperCase();

var dlugosc_hasla = haslo.length;

var haslo1 = "";

for(i=0; i<dlugosc_hasla; i++)
{
  if(haslo.charAt(i) == " ") haslo1 = haslo1 + " ";
  else haslo1 = haslo1 + "-";
}

function wypisz_haslo()
{
  document.getElementById('plansza').innerHTML = haslo1;
}

window.onload = start;

var litery = new Array(35);

function start()
{

  var alfabet ="";

  for(i=0; i<=34; i++)
  {
    alfabet = alfabet + '<div class ="litera">A</div>';
    if((i+1)%7==0) alfabet = alfabet+'<div style="clear:both;"></div>';
  }


  document.getElementById('alfabet').innerHTML = alfabet;

  wypisz_haslo()
}
