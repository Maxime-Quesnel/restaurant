let numéro = document.getElementById('fname');

const resultat = document.getElementById('resultat')

if (numéro.value == 1){
    resultat.innerHTML = ('nombre de lettre:' + 1);
}
document.getElementById("fname").onchange = function() {myFunction()};

numéro.addEventListener("input", function(){
    resultat.innerHTML = 'nombre de lettre:' + numéro.value;
});
