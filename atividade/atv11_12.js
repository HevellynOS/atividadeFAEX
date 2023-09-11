
const onClickHandleAverage = (event) => {
    event.preventDefault();
    const n1 = parseFloat(document.querySelector("#n1").value);
    const n2 = parseFloat(document.querySelector("#n2").value);
    const n3 = parseFloat(document.querySelector("#n3").value);
    const p1 = parseFloat(document.querySelector("#p1").value);
    const p2 = parseFloat(document.querySelector("#p2").value);
    const p3 = parseFloat(document.querySelector("#p3").value);
    const res = document.querySelector("#calculcAverageRes");

    if (isNaN(n1) || isNaN(n2) || isNaN(n3) || isNaN(p1) || isNaN(p2) || isNaN(p3)) {
        res.innerHTML = "Por favor, insira valores numéricos válidos em todas as caixas.";
    } else {
        const mediaPonderada = (n1 * p1 + n2 * p2 + n3 * p3) / (p1 + p2 + p3);
        res.innerHTML = `Média Ponderada: ${mediaPonderada.toFixed(2)}`;
    }
}


const onClickHandleCheckNumber = (event) => {
    event.preventDefault();

    const num = parseInt(document.querySelector("#numPrime").value);
    const res = document.querySelector("#resNum");
    
    if (isNaN(num) || num <= 1) {
        res.innerHTML = "Insira um número inteiro válido maior que 1.";
    } else {
        let isPrime = true;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) {
            res.innerHTML = `O número ${num} é primo.`;
        } else {
            res.innerHTML = `O número ${num} não é primo.`;
        }
    }
}
