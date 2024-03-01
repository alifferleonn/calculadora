document.addEventListener("DOMContentLoaded", function() {
    const screen = document.getElementById("screen");
    const buttons = document.querySelectorAll(".button");

    let currentInput = "";
    let currentOperator = "";
    let previousInput = "";

    // Adicione um evento de clique para cada botão
    buttons.forEach(button => {
        button.addEventListener("click", function() {
            const value = button.value;

            if (value >= '0' && value <= '9') {
                currentInput += value;
                screen.value = currentInput;
            } else if (value === "+" || value === "-" || value === "*" || value === "/") {
                currentOperator = value;
                previousInput = currentInput;
                currentInput = "";
            } else if (value === "=") {
                if (currentInput !== "" && previousInput !== "" && currentOperator !== "") {
                    const num1 = parseFloat(previousInput);
                    const num2 = parseFloat(currentInput);

                    switch (currentOperator) {
                        case "+":
                            currentInput = (num1 + num2).toString();
                            break;
                        case "-":
                            currentInput = (num1 - num2).toString();
                            break;
                        case "*":
                            currentInput = (num1 * num2).toString();
                            break;
                        case "/":
                            currentInput = (num1 / num2).toString();
                            break;
                    }

                    screen.value = currentInput;
                    previousInput = "";
                    currentOperator = "";
                }
            } else if (value === "C") {
                // Limpar a tela e as variáveis
                currentInput = "";
                currentOperator = "";
                previousInput = "";
                screen.value = "";
            }
        });
    });
});
