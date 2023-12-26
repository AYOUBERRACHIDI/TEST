let currentInput = '';
let operator = '';
let resultat = 0;

function afficher1(number) {
    currentInput += number;
    updateResult();
    
}
    
function setOperator(newOperator) {
    operator = newOperator;
    resultat = parseFloat(currentInput);
    currentInput = '';
}

function clearResult() {
    currentInput = '';
    operator = '';
    resultat = 0;
    updateResult();
}

function calculateResult() {
    const number = parseFloat(currentInput);
    switch (operator) {
        case '+':
            resultat += number;
            break;
        case '-':
            resultat -= number;
            break;
        case '*':
            resultat *= number;
            break;
        case '/':
            resultat /= number;
            break;
    }
    currentInput = '';
    updateResult();
}

function updateResult() {
    document.getElementById('result').value = currentInput !== '' ? currentInput : resultat;
}
