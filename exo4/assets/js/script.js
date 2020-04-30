let days = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];
let idList = document.getElementById("list");


days.forEach(myFunction);

function myFunction(item, index) {
    let myP = document.createElement("P");


    if (item == "Samedi" || item == "Dimanche") {
        myP.innerText = index + ": " + item ;
        console.log (myP);
        myP.style.fontWeight ="bold";

    } else {
        myP.innerText = index + ": " + item;
    }
        idList.appendChild(myP);


}




// var text = "";
// var i;
// for (i = 0; i < days.length; i++) {

//     text += i+1 + " : " + days[i] + "<br>";

// }
// idList.innerHTML = text;