var pai = document.body;


for (let i = 0; i < 3; i++) {
    var torre = document.createElement('div');
    torre.setAttribute("id", i);
    torre.setAttribute("class", "torres")
    pai.appendChild(torre);

}