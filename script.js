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



                if (document.getElementById(array[0]).childNodes[0].clientWidth > document.getElementById(array[1]).childNodes[0].clientWidth || document.getElementById(array[1]).childElementCount == 0 ) {
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

            array.length = 0; // zera o array

        }
    }


}




function moverDisco() {


    // var tabela2 = document.getElementById(array[1]); retirei pra melhorar a leitura do codigo
    var disco = document.createElement('div');

    disco.setAttribute("id", document.getElementById(array[0]).firstElementChild.id);
    disco.setAttribute("class", "disco")


    
    document.getElementById(array[1]).insertBefore(disco, document.getElementById(array[1]).childNodes[0]);

    
    document.getElementById(array[0]).removeChild(document.getElementById(array[0]).childNodes[0]);// remove


    if (document.getElementById(2).childElementCount == 4) { //condição de vitoria
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

