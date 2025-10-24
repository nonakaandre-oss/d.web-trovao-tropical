var APIKEY = "a6b11b84d6c8495395b143652252410";

function populaCard(event){
    let dadosClima = JSON.parse(this.responseText);
    console.log(dadosClima);
}

function buscarDadosClima(cidade){
    let req = new XMLHttpRequest();
    req.addEventListener("load",populaCard);
    req.open("GET","http://api.weatherapi.com/v1/current.json?key="+APIKEY+"&q="+cidade+"&aqi=no");
    req.send();
}
 
buscarDadosClima(São Paulo);