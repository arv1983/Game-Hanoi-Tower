var corpo = document.getElementById('corpo');

for (let i = 0; i < 3; i++) {
    var torre = document.createElement('div');
    torre.setAttribute("id", i);
    torre.setAttribute("class", "torres")
    corpo.appendChild(torre);
}

var tabela = document.getElementById('0');
for (let i = 0; i < 4; i++) {

    var disco = document.createElement('div');
    disco.setAttribute("id", "disco" + i);
    disco.setAttribute("class", "disco")
    tabela.appendChild(disco);
}


/// on click na div remove disco 1
// on click torre 2 ou 3 coloca o disco



//REMOVE CHILD OK
// tabela.removeChild(tabela.childNodes[0]);




console.log(tabela.firstElementChild);