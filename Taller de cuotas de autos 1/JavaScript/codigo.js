function sub(){
    genero = document.getElementById("genero").value;
    edad = document.getElementById("edad").value;

    const cat1A = 2500;//16-25 años, hombre
    const cat1B = 2350;//16-25 años, mujer
    const cat2A = 2000;//26-39 años, hombre
    const cat2B = 1850;//26-39 años, mujer
    const cat3A = 1500;//40-85 años, hombre
    const cat3B = 1250;//40-85 pero menos de 86 años mujer


    if(edad >=16 && edad <=25 && genero === 'hombre'){
        msj = 'El precio de su poliza es: ';
        precio = cat1A;
    }else if(edad >=16 && edad <=25 && genero === 'mujer'){
        msj = 'El precio de su poliza es: ';
        precio = cat1B;
    }else if(edad >=26 && edad <=39 && genero === 'hombre'){
        msj = 'El precio de su poliza es: ';
        precio = cat2A;
    }else if(edad >=26 && edad <=39 && genero === 'mujer'){
        msj = 'El precio de su poliza es: ';
        precio = cat2B;
    }else if(edad >=40 && edad <=85 && genero === 'hombre'){
        msj = 'El precio de su poliza es: ';
        precio = cat3A;
    }else if(edad >=40 && edad <=85 && genero === 'mujer'){
        msj = 'El precio de su poliza es: ';
        precio = cat3B;
    }
    else {
        msj ='Lo sentimos no tenemos poliza disponible';
    }

    const cuota = document.getElementById('cuota');

    if(precio != 0){
        cuota.innerHTML=`
        <div>
            <span> ${msj} </span>
            <span> ${precio}</span>
        </div>
        `;
    }
}
 





