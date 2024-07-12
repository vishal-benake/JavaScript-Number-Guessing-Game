const minimum = 1;
const maximum = 100;
const answer = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

let attempts = 0;
let guess;
let running = true;

while(running){
    guess = window.prompt(`Guess a number between ${minimum}-${maximum}.`);
    guess = Number(guess);

    if(isNaN(guess)){
        window.alert("Please enter a valid Number!");
    } 
    else if (guess < minimum || guess > maximum){
        window.alert("Please enter a valid Number!");
    }
    else {
        attempts++;
        if(guess < answer){
            window.alert("Too Low! Please try again!");
        }
        else if(guess > answer){
            window.alert("Too High! Please try again!");
        }
        else {
            window.alert(`Correct! Your answer was ${answer}. You took ${attempts} attempts.`)
            running = false;
        }
    }
}