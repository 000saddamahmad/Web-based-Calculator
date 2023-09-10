let expression = "";
let result = "";

function appendToExpression(value) {
    expression += value;
    document.getElementById("expression").value = expression;
}

function calculateResult() {
    try {
        result = eval(expression);
        if (isNaN(result) || !isFinite(result)) {
            throw "Invalid input";
        }
        document.getElementById("result").value = result;
    } catch (error) {
        document.getElementById("result").value = "Invalid Input";
    }
}

function clearDisplay() {
    expression = "";
    result = "";
    document.getElementById("expression").value = "";
    document.getElementById("result").value = "";
}
 
function toggleSign() {
    if (expression.charAt(0) === '-') {
        expression = expression.slice(1); // Remove the negative sign
    } else {
        expression = '-' + expression; // Add a negative sign
    }
    document.getElementById("expression").value = expression;
}

// Add this function to calculate the square root
function calculateSquareRoot() {
    try {
        const expression = document.getElementById("expression").value;
        const result = Math.sqrt(eval(expression));
        if (isNaN(result) || !isFinite(result)) {
            throw "Invalid input";
        }
        document.getElementById("result").value = result;
    } catch (error) {
        document.getElementById("result").value = "Invalid Input";
    }
}
