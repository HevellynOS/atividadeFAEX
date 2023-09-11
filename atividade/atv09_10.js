 
 
 
 const onClickHandleSeasons = (event) => {
    event.preventDefault()

    const seasons = document.querySelector("#seasons").value

   const seasonRes = document.querySelector("#seasonRes")

    switch (seasons){
        case "December":
        case "January":
        case "February":
            seasonRes.innerHTML = "Inverno";
            break;
        case "March":
        case "April":
        case "May":
            seasonRes.innerHTML = "Primavera";
            break;
        case "June": 
        case "July":
        case "August":
            seasonRes.innerHTML = "Verão";
            break;
        case "September":
        case "October":
        case "November":
            seasonRes.innerHTML = "Outono";
            break;
        default: 
            seasonRes.innerHTML = "Nothing";
    }
 }

 const onClickHandleType = (event) => {
    event.preventDefault();
    const size1 = parseFloat(document.querySelector("#size1").value);
    const size2 = parseFloat(document.querySelector("#size2").value);
    const size3 = parseFloat(document.querySelector("#size3").value);
    const triangleType = document.querySelector("#triangleType");

    if (size1 === size2 && size2 === size3) {
        triangleType.innerHTML = "Equilátero";
    } else if (size1 === size2 || size1 === size3 || size2 === size3) {
        triangleType.innerHTML = "Isósceles";
    } else {
        triangleType.innerHTML = "Escaleno";
    }
}





