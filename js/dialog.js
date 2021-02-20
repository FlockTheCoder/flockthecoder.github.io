// just a simply dialog with the host


document.querySelector(".btn-worte-rate-spiel").addEventListener("click", function() {

    var name = prompt("Bitte wähle einen Spielernamen");
    
    var nameInParagraph = document.createElement("p");
    nameInParagraph.innerText = `Hallo ${name}! Morgen geht es hier weiter!`;

    document.querySelector(".worte-rate-spiel").appendChild(nameInParagraph);

})



