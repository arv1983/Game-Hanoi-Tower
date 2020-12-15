let array = [];

var corpo = document.getElementById('corpo');

for (let i = 0; i < 3; i++) {
    var torre = document.createElement('div');
    torre.setAttribute("id", i);
    torre.setAttribute("class", "torres");

    corpo.appendChild(torre);

    document.getElementById(i).onclick = function() {

        array.push(i);

        if (array.length == 2) {


            // tenho um array [x, y] x é de onde vai sair, y é pra onde vai



            var tabela2 = document.getElementById(array[1]);
            var disco = document.createElement('div');
            disco.setAttribute("id", document.getElementById(array[0]).firstElementChild.id);
            disco.setAttribute("class", "disco")
            tabela2.appendChild(disco);
            console.log('vai criar: ' + document.getElementById(array[0]).firstElementChild.id);



            document.getElementById(array[0]).removeChild(document.getElementById(array[0]).childNodes[0]);




            console.log(array)
            array.length = 0; // zera o array
            //criar função para  retirar e colocar a div



        }
    }


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