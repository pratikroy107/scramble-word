const msg = document.querySelector('.msg');
const guess = document.querySelector('input');
const btn = document.querySelector('.btn');
let play = false;
let newWords = "";
let randWords = "";
let sWords = ['mercury', 'venus', 'earth', 'mars', 'jupiter', 'saturn', 'uranus', 'neptune']

const createNewWords = () => {
    let ranNum = Math.floor(Math.random() * sWords.length);
    let newTempSwords = sWords[ranNum];
    return newTempSwords;
}

const scrambleWords = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;
}

btn.addEventListener('click', function () {
    if (!play) {
        play = true;
        btn.innerHTML = "Guess";
        guess.classList.toggle('hidden');
        newWords = createNewWords();
        randWords = scrambleWords(newWords.split(""));
        //console.log(randWords);
        msg.innerHTML =`Guess : "${randWords.join("")}"`;
    }
    else {
        let tempWord = guess.value;
        if(newWords === tempWord) {
            play = false;
            //console.log("correct");
            msg.innerHTML = `Awesome! "${newWords}" is correct :) `;
            btn.innerHTML = "Play Next";
            guess.classList.toggle('hidden');
            guess.value = "";
        }
        else {
            msg.innerHTML = `Sorry :( "${tempWord}" is incorrect.
            Guess again : "${randWords.join("")}"`;
            guess.value = "";
            //console.log("incorrect");
        }
    }
})
