// Snack 1
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal. 
// Risolvetelo prima in versione ES5, poi commentate la versione in ES5 e fatelo in ES6.

/*var bike= [
    {
        name:'colorado',
        peso:10
    },

    {
        name:'corvin',
        peso: 15
    },

    {
        name:'calesi',
        peso: 20
    }


]

var lastBikepeso;
var lastPesobikemin=Infinity;

for(var i = 0; i < bike.length; i++){
    var oneBike= bike[i].peso;

    if(oneBike < lastPesobikemin){
        lastBikepeso = bike[i];
        lastPesobikemin = oneBike;
    }
}
 console.log(lastPesobikemin);  */

 const bike = [
     {name:'colorado', peso:10},
     {name:'corvin', peso:15},
     {name:'calesi', peso:20},
 ]

 let lastBikepeso;
 let lastPesobikemin=Infinity;

 for(let i = 0; i<bike.length;i++){
    const{peso}=bike[i];
    if(peso<lastPesobikemin){
        lastBikepeso=bike[i];
        lastPesobikemin=peso;
    }
 }
 const{name}=lastBikepeso
 console.log(`Quello con minor peso è: ${name}`);