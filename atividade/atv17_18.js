
const onClickHandleCalcFees = (event) => {
    event.preventDefault()

    const valuePrinc = parseFloat(document.querySelector("#valuePrinc").value)
    const fees = parseFloat(document.querySelector("#fees").value)
    const month = parseInt(document.querySelector("#month").value)

    const res = document.querySelector("#calcFeesRes")

    result = valuePrinc * fees * month;

    res.innerHTML = `O calculo de Juros simples deu ${result}`
}   

/*• Peso-pena: até 57 kg
• Peso-leve: de 57 kg a 70 kg
• Peso-médio: de 70 kg a 84 kg
• Peso-pesado: acima de 84 kg
*/ 

const onClickHandleFightWeight = (event) => {
    event.preventDefault()


    const weightUser = parseInt(document.querySelector("#weightUser").value)
    const res = document.querySelector("#resFightWeight")

    if(isNaN(weightUser)){
        res.innerHTML = "Informe um peso Valido";
    }else {
        if(weightUser <= 56){
            res.innerHTML = "Peso-Leve";
        } else if(weightUser >= 57 || weightUser < 70 ) {
            res.innerHTML = "Peso-Medio";
        }else if(weightUser >= 70 || weightUser < 84 ) {
            res.innerHTML = "Peso-Pesado";
        } else {
            res.innerHTML = "Peso-Pesado";
        }        
    }
}