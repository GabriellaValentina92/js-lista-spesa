// Rivediamo l’esercizio visto insieme, ma questa volta con il ciclo while al posto del ciclo for. Facciamo attenzione a non dimenticare tutte le differenze implementative che il ciclo while ci impone, in particolare alla variabile di indice


let shopping_list = [
    'patatine', 
    'cioccolato', 
    'Naicha', 
    'Mochi', 
    'vino rosso',
    'tequila',
    'prosecco',
    'amaro-Monte Polizo',
    'pizza',
];


let shopList = document.querySelector('.list');
let addList = document.querySelector('.btn')
let textList = document.querySelector('.textlist')

let i = 0;
// debugger
while (i < shopping_list.length){
    shopList.innerHTML += `<li>${shopping_list[i]}</li>`;
    i++
}

addList.addEventListener ('click', 
    function(){
    shopping_list.push(textList.value);  
    shopList.innerHTML += `<li>${textList.value}</li>`;
})

addList.addEventListener ('click', 
    function(){
     
    textList.value = '';
})