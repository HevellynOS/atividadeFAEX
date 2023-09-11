
/*Atv 01 e Atv 02*/ 
const userData = document.querySelector(".user-data");

const displayStudents = () => {
    const students = JSON.parse(localStorage.getItem("students")) || [];

    const tdbody = document.querySelector("tbody");
    tdbody.innerHTML = '';

    students.forEach((student, index) =>{
        const tr = document.createElement("tr");
        const tdName = document.createElement("td");  
        const tdAge = document.createElement("td"); 
        const tdSituation = document.createElement("td"); 
        const tdButton = document.createElement("td");
        const btn = document.createElement('button');

        btn.textContent = 'Remove';
        btn.className = 'btn';
        btn.addEventListener('click', () => removeStudent(index));

        tdName.textContent = student.name;
        tdAge.textContent = student.age;
        tdSituation.textContent = student.situation;
        tdButton.appendChild(btn);
        
            
        tr.appendChild(tdName);
        tr.appendChild(tdAge);
        tr.appendChild(tdSituation);
        tr.appendChild(tdButton);
        tdbody.appendChild(tr);
       
    });
};

const addStudents = () => {
        const userName = prompt("Digite seu nome");
        const userAge = prompt("Digite sua idade");
        const userNote = prompt("Digite sua nota no exame, para avaliação!!");
        const userData = document.querySelector(".user-data");
        const joke = "se beber não dirija!";
        const formattedName = userName.charAt(0).toUpperCase() + userName.slice(1);

        if (parseInt(userAge) < 18) {
            alert(`Olá ${formattedName} você tem ${userAge} anos, e é menor de idade`);
            userData.innerHTML = `${formattedName}: ${userAge} anos, e é menor de idade`;
        } else {
            alert(`Olá ${formattedName} você tem ${userAge} anos, e é maior de idade`);
            userData.innerHTML = `${formattedName}: ${userAge} anos, e é maior de idade`;
            alert(`${joke.toUpperCase()}`);
        }

        let userSituation;
        
        if(userNote < 7){
            userSituation = `Reprovado!!`
    } else {
            userSituation = `Aprovado!!`
            alert ("PARABENS!!! Aprovado ")
    };

    const students = JSON.parse(localStorage.getItem("students")) || [];
    students.push({name: userName, age: userAge, situation: userSituation});

    localStorage.setItem("students", JSON.stringify(students));

        displayStudents();
}

const removeStudent = (index) => {
    const students = JSON.parse(localStorage.getItem("students")) || [];;
    students.splice(index, 1);
    localStorage.setItem("students", JSON.stringify(students));
    displayStudents(); 
}

window.onload = () => {
displayStudents();
addStudents();	
}

