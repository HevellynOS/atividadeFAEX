const onClickHandleVotingAge = (event) => {
    event.preventDefault();

   const age = parseInt(document.querySelector("#age").value)
   const res = document.querySelector("#votingAgeRes")

   if (isNaN(age)){
    res.innerHTML = "Informe uma Idade"
   } else {
        if (age < 18 ){
            res.innerHTML = "Você não pode votar"
        } else {
            res.innerHTML = "Você pode votar!!"
        }
   }
}

/*  <strong>Atv_16 - Verificação de ano bissexto: </strong> Pergunte ao usuário um ano e determine se ele é bissexto ou não.
    Fórmula: Um ano é bissexto se for divisível por 4. No entanto, anos divisíveis por 100 são exceções e devem ser divisíveis por 400
     para serem bissextos.*/ 

const onClickHandleCheckYear = (event) => {
    event.preventDefault();

    const year = parseInt(document.querySelector("#year").value);
    const res = document.querySelector("#resYear");

    if (isNaN(year)) {
        res.innerHTML = "Informe um ano válido.";
    } else {
        if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
            res.innerHTML = `${year} é um ano bissexto.`;
        } else {
            res.innerHTML = `${year} não é um ano bissexto.`;
        }
    }
}