// Rivediamo l’esercizio visto insieme, ma questa volta con il ciclo while al posto del ciclo for. Facciamo attenzione a non dimenticare tutte le differenze implementative che il ciclo while ci impone, in particolare alla variabile di indice


let shopping_list = [
    'burrobirra', 
    'caramelle Mou', 
    'Naicha', 
    'Mochi', 
    'spaghetti di soia',
    'salsa teriyaki',
    'baijiu',
];


let shopList = document.querySelector('.list');
let i = 0;
// debugger
while (i < shopping_list.length){
    shopList.innerHTML += `<li>${shopping_list[i]}</li>`;
    i++
}