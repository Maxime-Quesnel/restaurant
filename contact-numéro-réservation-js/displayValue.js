/* Je stocke mon id dans ma variable number */
let number = document.getElementById('reservation-ticket');

/* Je lie l'id à ma constante result */
const result = document.getElementById('result');

/* Je fais une condition pour checker que si la valeur est à 1 je transforme mon résultat en html, valeur par défault à 1 dans l'input */
if (number.value == 1) {
    result.innerHTML = 'Votre numéro de réservation est: ' + 1;
}

/* Utilise onChange pour le prénom */

/* Le listener c'est pour changer la valeur dès que tu changes le nombre */
number.addEventListener("input", function () {
    result.innerHTML = 'Votre numéro de réservation est: ' + number.value;
    
});
