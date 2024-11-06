/*Write a JavaScript program that randomly generates a three-word phrase, but this time add an additional challenge:

Each word should be chosen based on random weighted probabilities. For example:

The first word has a 20% chance of being "brave", 50% chance of being "clever", and 30% chance of being "sneaky".

The second word has a 40% chance of being "ninja", 30% chance of being "pirate", and 30% chance of being "knight".

The third word has a 25% chance of being "flies", 50% chance of being "fights", and 25% chance of being "hides".
Use nested if-else or a similar structure to handle the weighted probabilities.

Log the generated phrase to the console.

Word Choices:
First Word:
"brave" (20% chance)
"clever" (50% chance)
"sneaky" (30% chance)

Second Word:
"ninja" (40% chance)
"pirate" (30% chance)
"knight" (30% chance)

Third Word:
"flies" (25% chance)
"fights" (50% chance)
"hides" (25% chance)

Example Output:
"clever pirate fights"
"brave knight flies"
Extra Challenge:

Instead of using just if-else, try writing a helper function to simplify the code, like:

js Copy code:
function getRandomWord(randomValue, wordsWithProbabilities) {
    // your logic to select a word based on randomValue and probabilities
}

This will help you organize the code better and make it reusable! Let me know if you'd like help with this one.
*/

function getFirstWord() {
    let randomValue = Math.random();
    
    if (randomValue < 0.2) {
        return "Brave";        // 20% probabilities
    } else if (randomValue < 0.7) {  
        return "Clever";          // 50 % of the chance
    } else {  // This handles the remaining cases (randomValue >= 0.7)
        return "Sneaky";  // 30 % of the chance
    }
}

function getSecondWord() {
    let randomValue = Math.random();
    
    if (randomValue < 0.40) {
        return "Ninja";   // 40 % of the chance
    } 
    else if (randomValue < 0.7){

        return "Knight"   // 0.40 to 0.7 is 30% of the chance
    }
    else {  
        return "Pirate"; // 30 % of the chance
    }
}

function getThirdWord() {
    let randomValue = Math.random();
    
    if (randomValue < 0.25) {
        return "flies";  // 25 % of the chance
    } 
    
    else if (randomValue< 0.75){
        
        return "Flights" // 0.25 to 0.75 is 50 % of the chance
    }

    else {  
        return "hides";  // 25 % of the chance
    }
}

// Correct function calls in the console.log
console.log(`${getFirstWord()} ${getSecondWord()} ${getThirdWord()}`);


/*

HERE IS MISTAKES IN MY CODE  :-)


function getfirstword(){
    let randomValue = Math.random()
    if(randomValue < 0.2){
    return "Brave";
    }
else if (randomValue< 0.7 && randomValue>=0.2){    ---> NO NEED 

    return "Clever"
}   
    else(randomValue< 1 && randomValue>= 0.7)
    return "Sneaky"
    
}
function getsecondword(){
    let randomValue = Math.random()
if(randomValue < 0.40){
    return "Ninja";
}
else if (randomValue>=0.40 && randomValue< 1){
    return "Private"
}

    else(randomValue>= 0.40 && randomValue< 1)
    return "Knight"
    
}
function getthirdword(){
    let randomValue = Math.random()
if(randomValue < 0.65){
    return "flies";
}
else if (randomValue< 0.7 && randomValue>=0.2){
    return "Flights"
}

    else(randomValue<0.65 && randomValue>= 0.2)
    return "hides"
    
}

console.log(`${getfirstword} ${getsecondword} ${getthirdword}`)









*/










