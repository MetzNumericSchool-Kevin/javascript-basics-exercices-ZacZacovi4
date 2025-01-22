const nom_sorcier = "Gendalf the Drunk";
// console.log("Le sorcier se nomme :" + nom_sorcier + " ! 🎉");

//Définition de variables

const nom_boutique = "BomBoClatz magie";
let nb_potion = 15864;
let prix_potion = 18;
let overture = true;

//Affichage conditionnel

if (overture === true) {
    console.log("Bienvenue dans la boutique " + nom_boutique + " Aventurier ! 🎉");
}else{
    console.log("La boutique " + nom_boutique + " est fermée, revenez plus tard Aventurier ! 😴");
}

//Affichage conditionnel avec switch
// Template littéral avec les backticks `` (altgr + touche 7 et appuyer deux fois)
let user_choix = prompt(`
Bienvenue dans mon humble boutique Aventurier. Que veux-tu savoir ? 🤔
    1. Le nom de la boutique
    2. Le nom du Sorcier
    3. Le prix d'un potion de soin
    4. La quantité d'une potion de soin
`);

user_choix = parseInt(user_choix)

switch (user_choix) {
    case 1:
        console.log(nom_boutique);
        break
    case 2:
        console.log(nom_sorcier);
        break
    case 3:
        console.log(prix_potion);
        break
    case 4:
        console.log(nb_potion);
        break
    default:
        console.log("Mh... Désolé aventurier, je ne comprends pas ce que tu souhaites. Refais ton choix ! 😕")
}

