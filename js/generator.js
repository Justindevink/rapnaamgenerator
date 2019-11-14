/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console': 0*/

//Uitkomsten
var namen = ['2Chainz','Gucci Mane','Xxxtentacion','Lil Uzi Vert','Blueface','Lil Peep','Tupac','The Notorious B.I.G.','Andre 3000','Eminem','Trippie Redd','Childish Gambino','Mac Miller','Post Malone','Ghostemane','Cardi B','Biz Markie','50 Cent','Amine','Tyler the Creator','Frank Ocean','Lil Pump','YNW Melly','21 Savage','Drake','Tory Lanez','6ix9ine','J. Cole','Kendrick Lamar','Travis Scott','Juice WRLD','Quavo','Offset','Lil Yachty','Swae Lee', 'A$AP Rocky'];

//error message
var error = 'Vul je naam in...';

//html elementen
var tekst = document.getElementById('tekst');
var knop = document.getElementById('knop');
var naam = document.getElementById('naam');

//functie voor knop
knop.onclick = function(){
    var ingevuld = tekst.value;

    //wanneer naam leeg is, verander inhoud van var tekst naar inhoud van var error
    if (ingevuld === ''){
        naam.innerText = error;
    }
    //wanneer naam niet leeg is, voer functie genereerNaam uit
    else {
        naam.innerText = genereerNaam(ingevuld);
    }
};

//functie maakt van ingevulde naam een rapnaam
function genereerNaam(ingevuldeNaam){
    var nummer = 0;


    //maakt van iedere letter een cijfer en telt deze bij elkaar op
    for (var i = 0; i < ingevuldeNaam.length; i++) {
        //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt
        nummer = nummer + ingevuldeNaam[i].charCodeAt();
    }

    //maakt van de uitkomst een getal dat in de array namen past
    //https://www.digitalocean.com/community/tutorials/how-to-do-math-in-javascript-with-operators
    var index = Math.floor(nummer % namen.length);
    return namen[index];
}

