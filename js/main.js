

/* MAIN */
/* Descrizione:
Visualizzare in pagina 5 numeri casuali.
Da lì parte un timer di 30 secondi.
    Dopo 30 secondi i numeri scompaiono e l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente.
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati. */


/* Creo i li con 5 numeri casuali */
createLiWithRandomNum(5, "paint");

/* Faccio partire un timer di 30 secondi, alla fine del quale nascondo "paint" e apro un prompt */
const inputDiv = document.getElementById("input");
const userInput = document.getElementById("inputText");
const pulsante = document.getElementById("button")
const paint = document.getElementById("paint");


let inputArray = [];
let numArray = [];

pulsante.addEventListener("click",
    function(){
        let userInputValue = userInput.value;
        inputArray.push(userInputValue);
        console.log(inputArray);


        if (inputArray.length == numArray.length){
            inputDiv.classList.add("hidden")
        }

    }  
    
    

    
)





function randomInteger(max, min) {

    return (Math.floor(Math.random() * ((max + 1) - min) + min));

}

function createLiWithRandomNum(n, where) {
    for (let i = 0; i < n; i++) {

        let randomNum = randomInteger(1, 100);

        numArray.push(randomNum)
        console.log(numArray[i])
        document.getElementById(where).innerHTML += `
        <li>${randomNum}</li>
    `;
    }
    console.log(numArray);
}




/* let seconds = 5;
let clock = setInterval(function () {
    console.log(seconds);
    if (seconds === 0) {
        paint.classList.add("nascondi");
        let playerInput = prompt("What did Simon say?")
        clearInterval(clock);
        
    } else {
        seconds--;
    }
}, 1000);
 */
















/* let i = 1;
while (i < 10 + 1){
    let level = createLiWithRandomNum(i, "paint");
    let seconds = 30;
    var timeOut = false;
    let clock = setInterval(function(){
        console.log(seconds);
        if(seconds === 0){
            var timeOut = true;
            clearInterval(clock);
        } else{

        }
    }, 1000);

    if (timeOut = true) {
        let playerInput = prompt("What did Simon say?");
        console.log(playerInput);
    } else {

    };

    let levelName = `Livello ${i}`;
    console.log(levelName);



    let playerWon = false;
    if (playerWon = true){
        i++;
    } else {
        alert("You lost")
    }
}

 */
