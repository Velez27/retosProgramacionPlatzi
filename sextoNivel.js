// Reto # 1
function sumarHastaCincuenta(){
    let total = 0;

    let numero = parseFloat(prompt('Ingresa un numero'));

    while(total <= 50){
        total += numero
    }

    if(total > 50){
        console.log(`El resultado es: ${total}`);
    }
}

sumarHastaCincuenta();

// Reto # 2
function masAllaCuerantaDos(){
    let numero = 0;

   do{

    numero = parseFloat(prompt('Dame un numero'));

   }while(numero <= 42)

   console.log(`Ingresaste un numero mayor a 42, el cual fue: ${numero}`);
}

masAllaCuerantaDos();

// Reto # 3
function sumasConsecutivas(){
    let primerNumero = parseFloat(prompt('Dame el primer numero'));
    let segundoNumero = parseFloat(prompt('Dame el segundo numero'));
    let total = 0;

    total = primerNumero + segundoNumero;

    let opcion = 0;

    do{
        opcion = parseInt(prompt('Quieres sumar otro numero? \n 1.- YES \n 2.- NO'))
        switch(opcion){
            case 1:
                let numeroAdicional = parseFloat(prompt('Dame otro numero'));
                total += numeroAdicional;
            break;
            case 2:
                console.log(`El resultado total es: ${total}`);
                opcion = 0;
            break;
            default:
                alert('Dame una opcion valida');
                opcion = 1;
            break;
        }

    }while(opcion === 1)

}

sumasConsecutivas();

// Reto # 4
function listaInvitados(){
    let invitados = [];
    let opcion = 0;

    invitados.push(prompt('Dame el nombre de tu amigo'));

    do{
        opcion = parseInt(prompt('Quieres agregar a otro amigo? \n 1.- YES \n 2.- NO'))
        switch(opcion){
            case 1:
                invitados.push(prompt('Dame el nombre de tu amigo'));
            break;
            case 2:
                console.log('Lista de Invitados \n');
                for(let i = 0; i < invitados.length; i++){
                    console.log(invitados[i] + '\n');
                }
                opcion = 0;
            break;
            default:
                alert('Dame una opcion valida');
                opcion = 1;
            break;
        }

    }while(opcion === 1)

}

listaInvitados();

// Reto # 5
function numeroSecreto(){
    let numero_secreto = Math.floor(Math.random() * (100 - 1) + 1);
    let numero_usuario = parseInt(prompt('Para adivinar el numero secreto\n Dame un numero entero entre 1 y 100'));
    let intentos = 0;
    if(numero_secreto === numero_usuario){
        intentos++;
        console.log(`Felicidades adivinaste el numero secreto: ${numero_secreto}, en solo ${intentos} intento`);
    }
    while(numero_secreto != numero_usuario){
        if(numero_usuario > numero_secreto){
            alert('Tu numero ingresado es mayor al numero secreto');
            intentos++;
        }
        if(numero_usuario < numero_secreto){
            alert('Tu numero ingresado es menor al numero secreto');
            intentos++;
        }
        numero_usuario = parseInt(prompt('Intentelo una vez mas'));
    }
    console.log(`Felicidades adivinaste el numero secreto: ${numero_secreto}, en solo ${intentos} intentos`);
}

numeroSecreto();

// Reto # 6
function unElefanteColumpiaba(){
    let numeroElefante = 1; 
    let letra = ('elefante se balanceaba \n Sobre la tela de una araña\n Como veia que resistia \n Fueron a llamar otro elefante');
    console.log('1 ' + letra);

    do{
        let next = parseInt(prompt('Cuantos elefantes mas se balancearan?'));
        if(next === numeroElefante + 1){
            numeroElefante++;
            console.log(`${numeroElefante} ` + letra);
        }
    }while(numeroElefante != 10)

}

unElefanteColumpiaba();