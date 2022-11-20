/* MAIN */
/* Descrizione:
Visualizzare in pagina 5 numeri casuali.
Da lì parte un timer di 30 secondi.
    Dopo 30 secondi i numeri scompaiono e l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente.
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati. */

/* Definisco gli array */
let inputArray = [];
let numArray = [];

/* Creo i li con 5 numeri casuali */
createLiWithRandomNum(5, "paint", numArray);

/* Faccio partire un timer di 30 secondi, alla fine del quale nascondo "paint" e apro un prompt */
const inputDiv = document.getElementById("input");
const userInput = document.getElementById("inputText");
const pulsante = document.getElementById("button")
const paint = document.getElementById("paint");
const invia = document.getElementById("submit")


pulsante.addEventListener("click",
    function(){
        let userInputValue = userInput.value;
        inputArray.push(userInputValue);
        console.log(inputArray);
        userInput.innerHTML="";

        if (inputArray.length == numArray.length){
            userInput.classList.add("hidden");
            pulsante.classList.add("hidden");
            invia.classList.remove("hidden");

        }

    }    
)
invia.addEventListener("click",

    function(){
        console.log(`Numeri generati: ${numArray}`);
        console.log(`Numeri inseriti da utente: ${inputArray}`);

        let score = 0;
        let arrayCheck = [];
        for (let i = 0; i < 5; i++){
            if (inputArray.includes(numArray[i])){
                score++;
                arrayCheck.push(numArray[i]);
            }else {

            }
        }

        console.log(arrayCheck);
        console.log(score);
    }

    

)





/* Funzioni */
function randomInteger(max, min) {

    return (Math.floor(Math.random() * ((max + 1) - min) + min));

}

function createLiWithRandomNum(n, where, array) {
    for (let i = 0; i < n; i++) {

        let randomNum = randomInteger(1, 100);

        array.push(randomNum)
        console.log(array[i])
        document.getElementById(where).innerHTML += `
        <li>${randomNum}</li>
    `;
    }
    console.log(array);
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
