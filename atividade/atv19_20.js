const onClickHandleConvertMeasures = (event) => {
    event.preventDefault();

    const measures = document.querySelector("#measures").value
    const res = document.querySelector("#convertMeasuresRes")
    const metros = parseFloat(document.querySelector("#metros").value)

    const cent = metros * 100;
    const mili = metros * 1000;
    const quilo = metros / 1000;

    switch (measures){
        case "cent": 
            res.innerHTML = cent
        break;
        case "mili": 
            res.innerHTML = mili
        break;
        case "quilo": 
        res.innerHTML = quilo
        break;
        default: 0;
    }
}


const onClickHandleProductPrice = (event) => {
    event.preventDefault();

    const price = parseFloat(document.querySelector("#productPrice").value)
    const quant = parseInt(document.querySelector("#productQuant").value)

    const res = document.querySelector("#resProductPrice")

    if(isNaN(price) || isNaN(quant)){
        res.innerHTML = "Informe um Valor valido"
    } else {
        if(price < 50 && quant > 10) {
            res.innerHTML = "Produto Disponivel"

        }else{
            res.innerHTML = "Produto Indisponivel"

        }
    }

}