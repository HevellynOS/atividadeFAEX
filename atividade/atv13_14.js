
const onClickHandleConverter = (event) => {
    event.preventDefault();

    const real = parseFloat(document.querySelector("#real").value);
    const rate = parseFloat(document.querySelector("#rate").value);

    const res = document.querySelector("#currencyConverterRes");

    if (isNaN(real) || isNaN(rate)) {
        res.innerHTML = "Por favor, insira valores numéricos válidos.";
    } else {
        const convertedValue = real * rate;

        res.innerHTML = `Valor convertido: ${convertedValue.toFixed(2)} na moeda estrangeira.`;
    }
}

const onClickHandleCheckDayWeek = (event) => {
    event.preventDefault();

    const day = parseInt(document.querySelector("#day").value);
    const res = document.querySelector("#resWeek");

    switch (day) {
        case 1:
            res.innerHTML = "Segunda-Feira";
        break;
        case 2:
            res.innerHTML = "Terça-Feira";
        break;
        case 3:
            res.innerHTML = "Quarta-Feira";
        break;
        case 4:
            res.innerHTML = "Quinta-Feira";
        break;
        case 5:
            res.innerHTML = "Sexta-Feira";
        break;
        case 6:
            res.innerHTML = "Sabado";
        break;
        case 7:
            res.innerHTML = "Domingo";
        break;
        default: 
            res.innerHTML = "Numero Invalido!!";
    }
    
}