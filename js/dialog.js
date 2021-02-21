// just a simply dialog with the host

var nameInParagraph = document.createElement("p");
var bearImg = document.createElement("img");
var playerName = "";

document.querySelector(".worte-rate-spiel").appendChild(bearImg);
document.querySelector(".worte-rate-spiel").appendChild(nameInParagraph);

document.querySelector(".btn-worte-rate-spiel").addEventListener("click", function() {
    
    if (playerName.length == 0) {
        playerName = prompt("Bitte wähle einen Spielernamen");
    }
     
    var bearAnswer = confirm("Magst du Bären?");

    if (bearAnswer) {     
        bearImg.src = "https://images-na.ssl-images-amazon.com/images/I/8117WURKQHL._AC_SL1200_.jpg"
    } else {
        bearImg.src = "https://static.boredpanda.com/blog/wp-content/uploads/2019/11/jill-rescue-squirrel-miniature-teddy-bear-this-girl-is-a-squirrel-fb2.png"    
    }

    
    if (bearAnswer) {
    nameInParagraph.innerText = `Hallo ${playerName}! Ssuuuuuuuupppppppeeeeeer! Spitzenklasse! Dann gibt es bald die nächste Überraschung für dich!`;
    } else {
    nameInParagraph.innerText = `${playerName}, das geht doch gar nicht - selbst Puschl haben mich zum Knuddeln gern! Überlegs dir noch einmal!`;
    }

    document.querySelector(".btn-worte-rate-spiel").innerText = "Anders überlegt?"

})



