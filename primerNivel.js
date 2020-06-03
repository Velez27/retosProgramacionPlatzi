// Reto 1
function saludar(){
    let nombre = prompt('¿Cual es tu nombre?');
    console.log(`Hola, ${nombre}`);
}

saludar();

// Reto 2
function saludarConApellido(){
    let nombre = prompt('¿Cual es tu nombre?');
    let apellido = prompt('¿Cual es tu apellido?');

    console.log(`Hola, ${nombre} ${apellido}`);
}

saludarConApellido();

// Reto 3
function mostrarCategoriasPlatzi(){
    let categorias = ['Desarrollo e Ingenieria', 'Diseño y UX', 'Marketing', 'Negocios y Emprendimiento', 'Produccion Audiovisual', 'Crecimiento Profesional'];
    console.log(categorias.join('\n'));
}

mostrarCategoriasPlatzi();

// Reto 4
function sumaEnteros(){
    let primerValor = parseFloat(prompt('Dame el primer valor'));
    let segundoValor = parseFloat(prompt('Dame el segundo valor'));
    let suma = primerValor + segundoValor;
    suma.toFixed(2);

    console.log(`El resultado de la suma del primer y segundo valor es: ${suma}`);

}

sumaEnteros();

// Reto 5
function sumaTresNumeros(){
    let primerValor = parseFloat(prompt('Dame el primer valor'));
    let segundoValor = parseFloat(prompt('Dame el segundo valor'));
    let tercerValor = parseFloat(prompt('Dame el tercer valor'));
    let operacion = (primerValor + segundoValor) * tercerValor;
    operacion.toFixed(2);

    console.log(`El resultado de la operacion es: ${operacion}`);
}

sumaTresNumeros();

// Reto 6
function restarPizzas(){
    let rebanadasPizza = 8;
    console.log(`Imagina que llegas a una fiesta con ${rebanadasPizza} rebanadas de pizza`);
    let rebanadasPizzaConsumidas = 7;
    console.log(`Despues de un tiempo se comsumieron ${rebanadasPizzaConsumidas} rebanadas`);
    let rebanadasPizzaFinal = rebanadasPizza - rebanadasPizzaConsumidas;
    console.log(`Y al final te quedaste con solo ${rebanadasPizzaFinal} rebanada`);
    console.log(':´(');
}

restarPizzas();

// Reto 7
function edadFuturaYPasada(){
    let nombre = prompt('¿Cual es tu nombre?');
    let edad = parseInt(prompt('¿Cual es tu edad?'));
    let edadFutura = edad + 1;
    let edadPasada = edad - 1;

    console.log(`${nombre} el año pasado tenias ${edadPasada} años y el proximo año cumpliras ${edadFutura} años`);
}

edadFuturaYPasada();

// Reto 8
function divideCuenta(){
    let pagoTotal = parseFloat(prompt('¿Cuanto es el total a pagar?'));
    let cantidadPersonas = parseInt(prompt('¿Cuantas personas son en total?'));
    let porcentajePropina = parseFloat(prompt('¿Cual es el porcentaje de la propina?'));
    let porcentajeImpuesto = parseFloat(prompt('¿Cual es el porcentaje de los impuestos?'));

    porcentajePropina = porcentajePropina / 100;
    porcentajeImpuesto = porcentajeImpuesto / 100;

    let pagoTotalImpuestos = pagoTotal + ((pagoTotal * porcentajePropina) + (pagoTotal * porcentajeImpuesto));
    let pagoPorPersona = pagoTotalImpuestos / cantidadPersonas;
    pagoPorPersona.toFixed(2);

    console.log(`El total a pagar con impuestos es: ${pagoTotalImpuestos} pesos y cada persona debe pagar ${pagoPorPersona} pesos`);
}

divideCuenta();

// Reto 9
function calcularDias(dias){
    let horas = dias * 24;
    let minutos = horas * 60;
    let segundos = minutos * 60;

    console.log(`${dias} dias tiene ${horas} horas, ${minutos} minutos y ${segundos} segundos`);
}

calcularDias(5);

// Reto 10
function conversorMillas(){
    let cantidadMillas = parseInt(prompt('Dame la cantidad de millas'));
    let kilometros = cantidadMillas * 1.609344;

    console.log(`${cantidadMillas} millas equivale a ${kilometros} kilometros`);
}

conversorMillas();

// Reto 11
function cuantasVecesUnNumeroEnOtro(){
    let numeroMayor = parseFloat(prompt('Dame un numero mayor a 1000'));
    if(numeroMayor < 1000){
        alert('Por favor escribe un numero mayor a 1000');
        numeroMayor = parseFloat(prompt('Dame un numero mayor a 1000'));
    }
    let numeroMenor = parseFloat(prompt('Dame un numero menor a 100'));
    if(numeroMenor > 100){
        alert('Por favor escribe un numero menor a 100');
        numeroMenor = parseFloat(prompt('Dame un numero menor a 100'));
    }

    let numeroVeces = numeroMayor / numeroMenor;

    console.log(`El numero menor ${numeroMenor} que introduciste entra ${numeroVeces} veces en el numero ${numeroMayor} mayor que indroduciste`);

}

cuantasVecesUnNumeroEnOtro();