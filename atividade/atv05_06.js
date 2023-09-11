const calculateDesc = (event) => {
    event.preventDefault();

    const valueProduct = parseFloat(document.querySelector('.valueProduct').value);
    const desc = parseFloat(document.querySelector('.desc').value);

    const value = document.querySelector('.value');
    const maxValue = document.querySelector('.maxValue');
    

    const valueDesc = valueProduct - (valueProduct * (desc / 100));

    value.innerHTML = `Valor com Desconto: ${valueDesc.toFixed(2)}`;


}

const numbers = [];
const list = document.querySelector(".list_tree_number");
const resTree = document.querySelector('.res_tree');

const handleClickShowBigger = (event) => {
    event.preventDefault();

    const inputValue = parseInt(document.querySelector(".requestNum").value);

    if (!isNaN(inputValue)) {
        numbers.push(inputValue);

        const li = document.createElement('li');
        li.textContent = inputValue;
        list.appendChild(li);

        if (numbers.length === 3) {
            const maxValue = Math.max(...numbers);
            resTree.innerHTML = `O maior valor entre os 3 números é: ${maxValue}`;
        } else if (numbers.length === 4) {
            // Resetar o array e remover todos os <li>
            numbers.length = 0;
            list.innerHTML = '';
            resTree.innerHTML = '';
        }
    } else {
        alert("Por favor, insira um número válido.");
    }
}





