//Crea una funció que donat un nombre per paràmetre et retorni, mitjançant una promesa si és divisible entre dos o no.

function divisiblePerDos(num){
    return new Promise ((resolve, reject) => {
        if(num % 2 === 0){
            resolve(`El número ${num} és divisible en 2`)
        }else{
            reject(`El número ${num} no es divisible en 2`)
        }
    });
}

divisiblePerDos(2)
    .then(resultado => console.log(resultado))
    .catch(error => console.log(error));

//Assigna-li una promesa a una variable que comprovi si un valor és major o igual a 0 i menor o igual a 10.

const majorMenor10 = new Promise ((resolve, reject) => {
    const num = 5;
    if( num >= 0 && num <= 10){
        resolve("El valor es mayor o igual y menor o igual que 10")
    }else{
        reject("El valor no es mayor o igual ni menor o igual que 10")
    }
});

majorMenor10
    .then(resultado => console.log(resultado))
    .catch(error => console.log(error));


// Crea una funció que es digui esVocal que retorni una promesa que calculi si una lletra està dins d’un array donat.

function esVocal(letra){
    return new Promise ((resolve, reject) => {
        let arr = ["a", "e" , "i", "o", "u"]
        if(arr.includes(letra)){
            resolve(`La letra ${letra} és un vocal`)
        }else{
            reject(`La letra ${letra} no és un vocal`)
        }
    });
}

esVocal("h")
    .then(resultado => console.log(resultado))
    .catch(error => console.log(error));

 // Crea una funció JS que rebi 2 paràmetres i que retorni una promesa que calculi la divisió del primer entre el 2on paràmetre.

 function division(dividendo, divisor){
    return new Promise ((resolve, reject) => {
        let resultado;
        if(divisor == 0 ){
            reject(new error("El divisor no puede ser 0"));
        }else{
            resolve(resultado = dividendo / divisor);
        }
    });
}

division(99, 9)
    .then(resultado => console.log(resultado))
    .catch(error => console.log(error.message));