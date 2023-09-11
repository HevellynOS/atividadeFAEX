
const convertTemp = (event) => {
    event.preventDefault();
    const conversionDirection = document.querySelector("#conversionDirection").value;
    const temperature = parseFloat(document.querySelector("#temperature").value);
    let result = 0;

    if (conversionDirection === "celsiusToFahrenheit") {
        result = (temperature * 9/5) + 32;
        document.querySelector("#convert-res").textContent = `Resultado: ${result.toFixed(2)} Fahrenheit`;
    } else if (conversionDirection === "fahrenheitToCelsius") {

        result = (temperature - 32) * 5/9;
        document.querySelector("#convert-res").textContent = `Resultado: ${result.toFixed(2)} Celsius`;
    }
}


const handleSummitLogin = (event) => {
    event.preventDefault();
    const name = document.querySelector("#nameLogin").value;
    const pass = document.querySelector("#passwordLogin").value;

    const res = document.querySelector("#validated");

    if (!name || !pass) {
        res.innerHTML = "Erro: Está faltando dados";
    } else {
        // You should replace these hardcoded values with actual user authentication logic.
        if (name === "admin" && pass === "senha123") {
            res.innerHTML = "Login Aprovado!! Seja Bem Vindo";
        } else {
            res.innerHTML = "Esse usuário não existe, crie uma conta";
        }
    }
}
