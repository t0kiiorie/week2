const selectMenu = document.querySelector('#colors');
const btnGetResults = document.querySelector('button');
const resultArea = document.querySelector('.result');
const resultContainer = document.querySelector('.result-container');
btnGetResults.addEventListener('click', () => {
    const userChoice = selectMenu.options[selectMenu.selectedIndex].value;
    let resultText = "";
    
    if (userChoice === 'red') {
        resultText = "you seek power and control.";
    } else if (userChoice=== 'blue') {
        resultText = "you look for meaning and significance in life.";
    } else if (userChoice === "green") {
        resultText = "you are a natural visionary, non-conformist, and problem-solver kind of individual.";
    } else if (userChoice === "yellow") {
        resultText = "you are an optimistic, fun-loving, cheery, creative kind of individual.";
    } else if (userChoice === "black") {
        resultText = "you are a strong-willed, determined, confident, independent, risk-taker kind of individual.";
    } else if (userChoice === "white") {
        resultText = "you are a peaceful, calm, and balanced kind of individual.";
    } else if (userChoice === "purple") {
        resultText = "you are a strong-willed, determined, confident, independent, risk-taker kind of individual.";
    } else if (userChoice === "orange") {
        resultText = "you are a fun-loving, adventurous, and social kind of individual.";
    } else if (userChoice === "pink") {
        resultText = "you are a romantic, sensitive, and compassionate kind of individual.";
    } else if (userChoice === "brown") {
        resultText = "you are a practical, reliable, and down-to-earth kind of individual.";
    } else if (userChoice === "other") {
        resultText = "Bro trynna be mysterious.";
    }    
    
    if (userChoice === "other") {
        resultContainer.style.background = '#777'; 
    } else {
        resultContainer.style.background = userChoice;
    }
    
    resultArea.innerHTML = resultText;
    
    
    
});