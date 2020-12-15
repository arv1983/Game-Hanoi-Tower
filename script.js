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




            // se width de destino for menor que recebe, tem que negar



            console.log('contagem de disco na div' + document.getElementById(array[1]).childElementCount);

            if (document.getElementById(array[1]).childElementCount >= 1 && document.getElementById(array[0]).childElementCount != 0) {
                console.log(document.getElementById(0).childElementCount)

                console.log(document.getElementById(array[1]).childNodes[0].clientWidth)

                console.log('contagem de disco ' + document.getElementById(array[1]).childElementCount)



                if (document.getElementById(array[0]).childNodes[0].clientWidth > document.getElementById(array[1]).childNodes[0].clientWidth || document.getElementById(array[1]).childElementCount == 0) {
                    console.log('Não aceita1')



                } else {

                    moverDisco();
                    console.log('aceita1')
                }
            } else {
                // 
                if (!document.getElementById(array[0]).childElementCount == 0) {
                    moverDisco();
                }

            }

            //console.log(document.getElementById(array[1]))













            console.log(array)
            array.length = 0; // zera o array

        }
    }


}




function moverDisco() {


    // var tabela2 = document.getElementById(array[1]); retirei pra melhorar a leitura do codigo
    var disco = document.createElement('div');

    disco.setAttribute("id", document.getElementById(array[0]).firstElementChild.id);
    disco.setAttribute("class", "disco")


    // document.getElementById(array[1]).appendChild(disco); //// problema
    document.getElementById(array[1]).insertBefore(disco, document.getElementById(array[1]).childNodes[0]); //appendChild(disco);

    //console.log('vai criar: ' + document.getElementById(array[0]).firstElementChild.id);

    // remove
    document.getElementById(array[0]).removeChild(document.getElementById(array[0]).childNodes[0]);


    if (document.getElementById(2).childElementCount == 4) {
        alert('ganhou')
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