// Reto #1

function numeroMayorYMenor(){
    
    let num1 = parseInt(prompt('Dame el primer numero'));
    let num2 = parseInt(prompt('Dame el segundo numero'));
    let diferencia = num1 - num2;

    if(num1 > num2){
        console.log(`El numero ${num1} es mayor que ${num2} y existe una diferencia de ${Math.abs(diferencia)}`);
    }else if(num1 === num2){
        console.log(`Los numeros ${num1} y ${num2} son iguales, por lo tanto no hay diferencia`);
    }else{
        console.log(`El numero ${num2} es mayor que ${num1} y existe una diferencia de ${Math.abs(diferencia)}`);
    }
}

numeroMayorYMenor();

// Reto #2

function rangoNumero(){

    let numLimite = parseInt(prompt('Dame el primer valor que sera el limite'));
    let numComparar = parseInt(prompt('Dame el segundo valor para comparar'));

    if(numComparar <= numLimite){
        console.log(`El numero ${numComparar} se encuentra en el rango, gracias`);
    }else{
        console.log(`El numero ${numComparar} excede el limite permitido`);
    }
}

rangoNumero();


// Reto #3
function rangoNumeroCambiante(){

    let numLimiteSuperior = parseInt(prompt('Dame el valor del limite superior'));
    let numLimiteInferior = parseInt(prompt('Dame el valor del limite inferior'));
    let numComparar = parseInt(prompt('Dame el valor del numero a comparar'));

    if(numComparar >= numLimiteInferior && numComparar <= numLimiteSuperior){
        console.log(`El numero ${numComparar} esta dentro del rango establecido`);
    }else if(numComparar < numLimiteInferior){
        console.log(`El numero ${numComparar} esta por debajo del rango inferior establecido`);
    }else if(numComparar > numLimiteSuperior){
        console.log(`El numero ${numComparar} esta por encima del rango superior establecido`);
    }
}

rangoNumeroCambiante();

// Reto #4

function ILikeTurtles(){

    let animalUsuario = prompt('Escribe tu animal favorito');
    let animalFavorito = 'TORTUGA';
    let animalUsuarioConversion = animalUsuario.toUpperCase();

    if(animalFavorito === animalUsuarioConversion){
        console.log('Tambien me gustan las tortugas');
    }else{
        console.log('Ese animal es genial, pero prefiero las tortugas');
    }

}

ILikeTurtles();

// Reto #5

function comoEstaElClima(){

    let estaLloviendo = prompt('¿Esta lloviendo?');
    let respuesta = estaLloviendo.toUpperCase();

    if(respuesta === 'SI'){
        let estaHaciendoViento = prompt('¿Esta haciendo mucho viento?');
        let respuesta = estaHaciendoViento.toUpperCase();
        if(respuesta === 'SI'){
            console.log('Hey! Hace mucho viento para salir con una sombrilla ');
        }else if(respuesta === 'NO'){
            console.log('LLeva una sombrilla :)');
        }
    }else if(respuesta === 'NO'){
        console.log('Que tengas bonito dia =)');
    }
}

comoEstaElClima();

// Reto #6

function edadPermitida(){

    let edadUsuario = parseInt(prompt('¿Cual es tu edad?'));
    
    if(edadUsuario > 30){
        console.log('Nunca es tarde para aprender ¿Que curso tomaremos?');
    }
    if(edadUsuario <= 29 && edadUsuario > 18){
        console.log('Es un momento excelente para impulsar tu carrera.');
    }
    if(edadUsuario < 18){
        console.log('¿Sabes hacia donde dirigir tu futuro? Seguro puedo ayudarte.');
    }
}

edadPermitida();

// Reto #7

function mensajesOpcionales(){

    let opcionUsuario = parseInt(prompt('Dame un valor entre el 1 y el 6'));

    if(opcionUsuario >= 1 && opcionUsuario <= 6){
        switch (opcionUsuario) {
            case 1:
                console.log('Hoy aprenderemos sobre programacion')
                break;
            case 2:
                console.log('¿Que tal tomar un curso sobre marketing digital?')
                break;
            case 3:
                console.log('Hoy es un gran dia para comenzar a aprender de diseño');
                break;
            case 4:
                console.log('¿Y si aprendemos algo de negocios online?');
                break;
            case 5:
                console.log('Veamos un par de clases sobre produccion audiovisual');
                break;
            case 6:
                console.log('Tal vez sea bueno desarrollar una habilidad blanda en Platzi');
                break;
        }
    }else{
        alert('Por favor ingrese un valor entre el rango establecido');
        mensajesOpcionales();
    }
}

mensajesOpcionales();