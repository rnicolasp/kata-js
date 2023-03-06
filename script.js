let botton1 = document.getElementById("button1");
let resultat = document.getElementById("resultat");
let input = document.getElementById("input");

botton1.onclick = function(){
    let resultat1 = input.value.replaceAll(" ", "").toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    resultat.value = resultat1;
}

