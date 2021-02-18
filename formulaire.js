var b_statut = false;
var b_nom = false;
var b_prenom = false;
var b_date = false;
var b_tel = false;
var soumettre = document.getElementById("soumettre");
function soumettre(){
    if (b_statut == true && b_nom == true && b_prenom == true && b_date == true && b_tel == true) {
document.getElementById("verification").innerText = "Envoi au serveur";
//document.getElementById("formulaire").submit();

    }
    else{

    }
}
soumettre.onclick = function(){
    document.getElementById("verification").innerHTML = "tout les champs ne sont pas corrects";

}