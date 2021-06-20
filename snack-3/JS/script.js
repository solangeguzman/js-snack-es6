// Snack 3
// Abbiamo sempre un array di squadre, con:
// nome
// punti fatti
// falli subiti
// Stampare in html (in forma tabellare!!! :allegria::allegria:) i dati relativi alle squadre evidenziando in giallo la riga corrispondente alla squadra con più falli subiti.



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




let squadreNpunt=0;
let squadraN;

for(let x=0; x<squadre.length;x++){
    const{punti}=squadre[x];
    if(punti>squadreNpunt){
        squadraN=squadre[x];
        squadreNpunt=punti;
    }
}

for(let x=0; x<squadre.length; x++){
    const{name, punti, falli}=squadre[x];
    if(squadraN===squadre[x]){
        document.getElementById('output').innerHTML = `
        <ul style="background:yellow">
          <li>${name}</li>
          <li>${punti}</li>
          <li>${falli}</li>
        </ul>
        `
    } else{
        document.getElementById('output').innerHTML = `
    <ul>
        <li>${name}</li>
        <li>${punti}</li>
        <li>${falli}</li>
    </ul>
    `
    }

}


