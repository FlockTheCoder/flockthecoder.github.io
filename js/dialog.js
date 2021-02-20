// just a simply dialog with the host


document.querySelector(".btn-worte-rate-spiel").addEventListener("click", function() {

    var name = prompt("Bitte wähle einen Spielernamen");
    var nameInParagraph = document.createElement("p");

    var bearAnswer = confirm("Magst du Bären?");
    var bearImg = document.createElement("img");

    if (bearAnswer) {     
        bearImg.src = "https://images-na.ssl-images-amazon.com/images/I/8117WURKQHL._AC_SL1200_.jpg"
    } else {
        bearImg.src = "https://i.pinimg.com/originals/74/60/5f/74605f7f18ad75ab6935508aca36b754.jpg"    
    }

    document.querySelector(".worte-rate-spiel").appendChild(bearImg);
    

    if (bearAnswer) {
    nameInParagraph.innerText = `Hallo ${name}! Freut mich! Morgen geht es weiter!`;
    } else {
    nameInParagraph.innerText = `Hallo ${name}! Schadddeeeeeeeeeeee, dass du keine Bären magst! :((((((((((`;
    }

    document.querySelector(".worte-rate-spiel").appendChild(nameInParagraph);

})



