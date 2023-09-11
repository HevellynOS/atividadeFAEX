


const calculateIMC = (e) => {
    e.preventDefault();
    const userHeight = parseFloat(document.querySelector(".height").value);
    const userWeight = parseFloat(document.querySelector(".weight").value);

    const res = document.querySelector(".res");
    const rest = document.querySelector(".rest");

    if (isNaN(userHeight) || isNaN(userWeight)) {
        res.innerHTML = "Por favor, insira valores válidos para altura e peso.";
        return;
    }

    const imc = userWeight / (userHeight * userHeight);

    if (imc < 18.5) {
        res.innerHTML = `O cálculo do Índice de Massa Corporal (IMC) é ${imc.toFixed(2)}, portanto está abaixo do peso.`;
    } else if (imc >= 18.5 && imc < 25) {
        res.innerHTML = `O cálculo do Índice de Massa Corporal (IMC) é ${imc.toFixed(2)}, portanto está dentro da faixa de peso normal.`;
    } else if (imc >= 25 && imc < 30) {
        res.innerHTML = `O cálculo do Índice de Massa Corporal (IMC) é ${imc.toFixed(2)}, portanto está acima do peso.`;
    } else {
        res.innerHTML = `O cálculo do Índice de Massa Corporal (IMC) é ${imc.toFixed(2)}, portanto está na faixa de obesidade.`;
    }
    const imcRounded = Math.round(imc);
    if(imcRounded % 2 === 0){
        rest.innerHTML = `${imcRounded} é par`;
    } else {
        rest.innerHTML = `${imcRounded} é impar`;

    }
}

