let array = [];

for (let i = 0; i < 3; i++) {
    var torre = document.createElement('div');
    torre.setAttribute("id", i);
    torre.setAttribute("class", "torres");
    document.getElementById('corpo').appendChild(torre);

    document.getElementById(i).onclick = function() {

        array.push(i);

        if (array.length == 2) {
            document.getElementById(array[0]).style.borderColor = 'black';

            if (document.getElementById(array[1]).childElementCount >= 1 && document.getElementById(array[0]).childElementCount != 0) {

                if (document.getElementById(array[0]).childNodes[0].clientWidth > document.getElementById(array[1]).childNodes[0].clientWidth || document.getElementById(array[1]).childElementCount == 0) {

                    document.getElementById("resultado").innerHTML = "Voce não pode colocar um disco maior em cima de um menor.";

                } else {

                    moverDisco();

                    if (document.getElementById(2).childElementCount == 4) {
                        document.getElementById("resultado").innerHTML = "Parabéns!! Você venceu.";
                    } else {
                        document.getElementById("resultado").innerHTML = "Excelente!!";
                    }

                }
            } else {

                document.getElementById("resultado").innerHTML = "Voce selecionou onde não tem discos";

                if (!document.getElementById(array[0]).childElementCount == 0) {
                    document.getElementById("resultado").innerHTML = "Boa!!";
                    moverDisco();
                }

            }

            array.length = 0; // zera o array

        } else {

            document.getElementById("resultado").innerHTML = "selecione para onde quer mover";
            document.getElementById(array[0]).style.borderColor = 'red';

        }

    }

}

function moverDisco() {
    var disco = document.createElement('div');
    disco.setAttribute("id", document.getElementById(array[0]).firstElementChild.id);
    disco.setAttribute("class", "disco")

    document.getElementById(array[1]).insertBefore(disco, document.getElementById(array[1]).childNodes[0]); //appendChild(disco);
    document.getElementById(array[0]).removeChild(document.getElementById(array[0]).childNodes[0]); //remove



}


for (let i = 0; i < 4; i++) {
    var disco = document.createElement('div');
    disco.setAttribute("id", "disco" + i);
    disco.setAttribute("class", "disco")
    document.getElementById('0').appendChild(disco);
}
