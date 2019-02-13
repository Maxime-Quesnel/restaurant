let nom = document.getElementById('fname');

const resultat = document.getElementById('resultat')

if (nom.value == ''){
    resultat.innerHTML = ('Votre prénom est:');
}
document.getElementById("fname").onchange = function() {myFunction()};

nom.addEventListener("input", function(){
    resultat.innerHTML = 'Votre prénom est:' + ' ' + nom.value;
});
