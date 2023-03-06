let botton1 = document.getElementById("button1");
let resultat = document.getElementById("resultat");
let input = document.getElementById("input");
let resultat2 = document.getElementById("resultat2");
let input2 = document.getElementById("input2");
let botton2 = document.getElementById("button2");
let forma = document.getElementById("forma");
let resultat3 = document.getElementById("resultat3");
let input3 = document.getElementById("input3");
let inverteix = document.getElementById("inverteix");
let afegeix = document.getElementById("afegeix");
let array = []; 

botton1.onclick = function(){
    let resultat1 = input.value.replaceAll(" ", "").toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    resultat.value = resultat1;
}

botton2.onclick = function (){
    let resultatn = 0;
    switch(forma.value){
        case "1":
            resultatn = 2 * Math.PI * input2.value;
            break;
        case "2":
            resultatn = Math.PI * (input2.value ** 2); 
            break;
        case "3":
            resultatn = (4/3) * Math.PI * (input2.value ** 3);
            break;
    }
    resultatn = resultatn.toFixed(2);
    resultat2.value = resultatn;

}

afegeix.onclick = function () {
    array[array.length] = input3.value;
    resultat3.value = array;
}

inverteix.onclick = function(){
    array.reverse();
    resultat3.value = array;
}