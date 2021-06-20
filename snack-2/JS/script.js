// Snack2
// Creare un array di oggetti di squadre di calcio.
// Ogni squadra avrà diverse proprietà:nome,punti fatti,falli subiti.
// Nome sarà l’unica proprietà da compilare,
// le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà: 
// Punti fatti e falli subiti.
// Infine usando la destrutturazione creiamo un 
// nuovo array i cui elementi contengono solo nomi e falli 
// subiti e stampiamo tutto in console.

const getRandomNum= (min,max)=> Math.floor(Math.random()*(max-min + 1))+min;

const squadre=[
    {
        nome:'inter',
        punti:0,
        falli:0
    },

    {
        nome:'Milan',
        punti:0,
        falli:0
    },

    {
        nome:'Juventus',
        punti:0,
        falli:0
    }
];
console.log(squadre);


for(let i=0; i <squadre.length; i++){
    squadre[i].punti=getRandomNum(0,10);
    squadre[i].falli= getRandomNum(0,15);
}

const listsquadre=[];
for(let i=0; i<squadre.length; i++){
    const{nome, punti}= squadre[i];
    listsquadre[i]={nome,punti};
}
console.log(listsquadre)