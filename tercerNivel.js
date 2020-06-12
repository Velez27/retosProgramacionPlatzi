// Reto #1

function longitudString(){
    let curso = prompt('¿Cual es el nombre de tu curso favorito?');
    
    console.log(`La longitud del nombre de tu curso favorito es: ${curso.length}`)
    }
    
    longitudString();
    
    // Reto #2
    
    function sumaStrings(){
    let nombre = prompt('¿Cual es tu nombre?');
    let apellido = prompt('¿Cual es tu apellido?');
    let comidaFavorita = prompt('¿Cual es tu comida favorita?');
    
    console.log(`Hola, mi nombre es ${nombre} ${apellido} y mi comida favorita es ${comidaFavorita}`);
    }
    
    sumaStrings();
    
    // Reto #3
    
    function ajustaIniciales(){
    let nombre = prompt('Dame tu nombre, en minusculas');
    let apellido = prompt('Dame tu apellido, en minusculas');
    let pais = prompt('Dame tu pais de origen, en minisculas');
    
    nombre = nombre[0].toUpperCase() + nombre.slice(1);
    apellido = apellido[0].toUpperCase() + apellido.slice(1);
    pais = pais[0].toUpperCase() + pais.slice(1);
    
    console.log(`Tu nombre es: ${nombre} \n Tu apellido es: ${apellido}\n Tu pais de origen es: ${pais}`);
    }
    
    ajustaIniciales();
    
    // Reto #4
    
    function stringFragmentado(){
    let oracion = prompt('Dame una oracion de 10 o mas caracteres');
    let oracionLongitud = oracion.length;
    
    alert(`A continuacion me daras un rango inicial y un rango final entre los valores 1 y ${oracionLongitud}`);
    let rangoInicial = parseInt(prompt(`Dame el valor inicial (1 y ${oracionLongitud})`));
    let rangoFinal = parseInt(prompt(`Dame el valor final (1 y ${oracionLongitud})`));
    
    let oracionFinal = oracion.slice(rangoInicial - 1, rangoFinal);
    console.log(`La oracion queda de la siguiente forma: ${oracionFinal}`);
    }
    
    stringFragmentado();
    
    // Reto #5
    
    function mayusculasMinusculas(){
    let palabraUno = prompt('Dame una palabra cualquiera');
    let palabraDos = prompt('Dame otra palabra cualquiera');
    
    console.log(`La primer palabra fue: ${palabraUno.toUpperCase()} \n La segunda palabra fue: ${palabraDos.toLowerCase()}`);
    }
    
    mayusculasMinusculas();
    
    // Reto #6
    
    function nombreCortosYLargos(){
    let nombre = prompt('¿Cual es tu nombre?');
    let nombreLongitud = nombre.length;
    
    if(nombreLongitud > 5){
        console.log(`¡Hola! ${nombre = nombre[0].toUpperCase() + nombre.slice(1)}`);
    }else{
        let apellido = prompt('¿Cual es tu apellido?');
        console.log(`¡Hola! ${nombre = nombre[0].toUpperCase() + nombre.slice(1)} ${apellido = apellido[0].toUpperCase() + apellido.slice(1)}`);
    }
    }
    
    nombreCortosYLargos();
    
    // Reto #7
    
    function puercoLatino(){
    let palabra = prompt('Dame una palabra');
    let primerLetra = palabra[0];
    let vocales = ['A', 'E', 'I', 'O', 'U'];
    let flag = false;
    let palabraFinal = '';
    
    for(let i = 0; i < vocales.length; i++){
        if(primerLetra.toUpperCase() === vocales[i]){
            palabraFinal = palabra + 'way';
            flag = true;
        }
    }
    
    if(flag != true){
        palabraFinal = palabra.slice(1) + primerLetra.toLowerCase() + 'ay';
    }
    
    palabraFinal = palabraFinal[0].toUpperCase() + palabraFinal.slice(1);
    console.log(`Tu palabra traducida a Pig Latin es: ${palabraFinal}`);
    }
    
    puercoLatino();