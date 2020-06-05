// Reto # 1
function multiplicarDecimales(){
    let primerNumero = parseFloat(prompt('Dame un numero con decimales'));
    let segundoNumero = parseFloat(prompt('Dame otro numero con decimales'));

    let resultado = primerNumero * segundoNumero;
    console.log(`El resultado de la multiplicacion es: ${resultado}`);
}

multiplicarDecimales();

// Reto # 2
function reducirDecimales(){
    let primerNumero = parseFloat(prompt('Dame un numero con decimales'));
    let segundoNumero = parseFloat(prompt('Dame otro numero con decimales'));

    let resultado = primerNumero * segundoNumero;
    console.log(`El resultado de la multiplicacion es: ${resultado.toFixed(4)}`);
}

reducirDecimales();

// Reto # 3
function raizCuadradaRedondeadas(){
    let numero = parseFloat(prompt('Dame un numero mayor a 20'));
    if(numero < 20){
        alert('Por favor ingrese un valor mayor a 20');
        raizCuadradaRedondeadas();
    } else{
        let raizCuadrada = Math.sqrt(numero);
        console.log(`La raiz cuadrada redondeada a 3 decimales de ${numero} es: ${raizCuadrada.toFixed(3)}`);
    }
}

raizCuadradaRedondeadas();

// Reto # 4
function areaCirculo(){
    let radio = parseFloat(prompt('Dame el radio de un circulo'));
    const EXPONENTE = 2;
    let areaCirculo = Math.PI * Math.pow(radio, EXPONENTE);

    console.log(`El area del circulo con ${radio} de radio es: ${areaCirculo.toFixed(3)}`);
}

areaCirculo();

// Reto # 5
function volumenCilindro(){
    let radio = parseFloat(prompt('Dame el radio del cilindro'));
    let profundidad = parseFloat(prompt('Dame la profundidad del cilindro'));
    const EXPONENTE = 2;
    let volumen = Math.PI * Math.pow(radio, EXPONENTE) * profundidad;

    console.log(`El volumen del cilindro con ${radio} de radio y ${profundidad} de profundidad es: ${volumen.toFixed(1)}`);
}

volumenCilindro();

// Reto # 6
function mostrarEnterosYRedusiduos(){
    let primerNumero = parseFloat(prompt('Dame el primer valor'));
    let segundoNumero = parseFloat(prompt('Dame el segundo valor'));
    let resultado = 0;
    let residuo = 0;
    if(primerNumero === 0){
        console.log('El resultado es: 0');
    }else if(segundoNumero === 0){
        console.log('El resultado es: Infinito');
    }else{
        resultado = primerNumero / segundoNumero;
        if(primerNumero >= segundoNumero){
            residuo = primerNumero % segundoNumero;
            console.log(`${primerNumero} dividido entre ${segundoNumero} es: ${Math.floor(resultado)} y sobra ${residuo.toFixed()}`);
        }else{
            console.log(`${primerNumero} dividido entre ${segundoNumero} es: ${resultado.toFixed(4)}`);
        }
    }
}

mostrarEnterosYRedusiduos();

// Reto # 7
function calcularPerimetrosYAreas(){
    let opcion = 0;
    let perimetro = 0;
    let area = 0;

    do{
        opcion = parseInt(prompt('BIENVENIDO!!!\n Selecciona una opcion: \n 1.- Cuadrado\n 2.- Circulo\n 3.- Pentagono\n 4.- Salir'));

        switch(opcion){
            case 1: 
                let ladoCuadrado = parseFloat(prompt('CUADRADO\n ¿Cuanto mide un lado del cuadrado en cm?'));
                perimetro = ladoCuadrado * 4;
                area = ladoCuadrado * ladoCuadrado;
                alert(`El perimetro de tu cuadrado es: ${perimetro} cm y su area es: ${area} cm^2`);
                break;
            case 2: 
                let radio = parseFloat(prompt('CIRCULO\n ¿Cual es el radio del circulo?'));
                perimetro = 2 * Math.PI * radio;
                area = Math.PI * Math.pow(radio, 2);
                alert(`El perimetro de tu circulo es: ${perimetro} cm y su area es: ${area} cm^2`);
                break;
            case 3:
                let ladoPentagono = parseFloat(prompt('PENTAGONO\n ¿Cuanto mide un lado del pentagono en cm?'));
                perimetro = ladoPentagono * 5;;
                // 5: numero de lados, 360: angulo
                let anguloCentral = 360 / 5;
                // Math.tan acepta radianes, por lo tanto lo convertimos a grados
                let apotema = ladoPentagono / (2 * (Math.tan(36 * (Math.PI/ 180))));
                area = (5 * ladoPentagono * apotema) / 2;
                alert(`El perimetro de tu pentagono es: ${perimetro} cm y su area es: ${area} cm^2`);
                break;
            case 4:
                alert('Adios');
                break;
            default:
                alert('Por favor, selecciona una opcion valida');
                break;
        }
    }while(opcion != 4);

}

calcularPerimetrosYAreas();