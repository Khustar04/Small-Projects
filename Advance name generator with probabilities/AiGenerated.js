// Helper function to get the random word based on the random value and probabilities
function getRandomWord(randomValue, wordsWithProbabilities) {
    let cumulativeProbability = 0;
    for (let i = 0; i < wordsWithProbabilities.length; i++) {
        cumulativeProbability += wordsWithProbabilities[i].probability;
        if (randomValue <= cumulativeProbability) {
            return wordsWithProbabilities[i].word;
        }
    }
}

// Words with associated probabilities
const firstWordProbabilities = [
    { word: "brave", probability: 0.2 },
    { word: "clever", probability: 0.5 },
    { word: "sneaky", probability: 0.3 }
];

const secondWordProbabilities = [
    { word: "ninja", probability: 0.4 },
    { word: "pirate", probability: 0.3 },
    { word: "knight", probability: 0.3 }
];

const thirdWordProbabilities = [
    { word: "flies", probability: 0.25 },
    { word: "fights", probability: 0.5 },
    { word: "hides", probability: 0.25 }
];

// Randomly generating the phrase
function generateRandomPhrase() {
    const random1 = Math.random();
    const random2 = Math.random();
    const random3 = Math.random();

    const firstWord = getRandomWord(random1, firstWordProbabilities);
    const secondWord = getRandomWord(random2, secondWordProbabilities);
    const thirdWord = getRandomWord(random3, thirdWordProbabilities);

    console.log(`${firstWord} ${secondWord} ${thirdWord}`);
}

// Generate a phrase
generateRandomPhrase();
