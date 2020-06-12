// Reto # 1
function favoriteCourse(){
    let favoriteCourse = prompt('¿Cual es tu curso favorito de Platzi?');
    let repeat = 8;

    for(let i = 0; i < repeat; i++){
        console.log(`${favoriteCourse}`);
    }
}

favotiteCourse();

// Reto # 2
function favoriteCourseN(){
    let favoriteCourse = prompt('¿Cual es tu curso favorito de Platzi?');
    let repeat = parseInt(prompt('¿Cuantas veces repetimos el mensaje?'));

    if(repeat <= 0){
        console.log('Okay :( ')
    }else{
        for(let i = 0; i < repeat; i++){
            console.log(`${favoriteCourse}`);
        }
    }
}

favoriteCourseN();

// Reto # 3
function favoriteCourseColumn(){
    let favoriteCourse = prompt('¿Cual es tu curso favorito de Platzi?');
    let repeat = favoriteCourse.length;

    for(let i = 0; i < repeat; i++){
        console.log(`${favoriteCourse[i]} \n`);
    }
}

favoriteCourseColumn();

// Reto # 4
function animalColumnN(){
    let favoriteAnimal = prompt('¿Cual es tu animal favorito?');
    let sizeNameAnimal = favoriteAnimal.length;
    let repeat = parseInt(prompt('¿Cuantas veces repetimos?'));

    if(repeat <= 0){
        console.log('Okay :(')
    }else {
        for(let i = 0; i < repeat; i++){
            for(let j = 0; j < sizeNameAnimal; j++){
                console.log(`${favoriteAnimal[j]}`);
            }
            console.log('--------------------')
        }
    }
}

animalColumnN();

// Reto # 5
function plustable(){
    let number = parseInt(prompt('¿De cual numero quieres tu table de multiplicar?'));
    let size = 10;

    for(let i = 0; i < size; i++){
        console.log(`${number} X ${i + 1} = ${number * (i + 1)}`);
    }
    
}

plustable();

// Reto # 6
function countdown(){
    let number = parseInt(prompt('¿Ingresa el numero para iniciar la cuenta regresiva?'));
    let absoluteNumber = Math.abs(number);

    for(let i = 0; i < absoluteNumber + 1; i++){
        if(number < 0){
            console.log(number++);
        }else if(number > 0){
            console.log(number--);
        }else if(number === 0){
            console.log(0);
        }
    }
}

// Reto # 7
function favoriteCourseWithoutOverplay(){
    let favoriteCourse = prompt('¿Cual es tu curso favorito de Platzi?');
    let repeat = parseInt(prompt('¿Cuantas veces repetimos el mensaje?'));

    if(repeat <= 0){
        console.log('Okay :( ')
    }else if(repeat > 15){
        console.log(`El numero ${repeat} es muy grande para repetir`);
        for(let i = 0; i < 3; i++){
            console.log(`${favoriteCourse}`);
        }
    }else{
        for(let i = 0; i < repeat; i++){
            console.log(`${favoriteCourse}`);
        }
    }
}

favoriteCourseWithoutOverplay()

// Reto # 8
function plusAuthorized(){
    let sumaTotal = 0;
    let serieNumber = [];
    let number = 0;
    let opcion = false;
    let repeat = 4;
    for(let i = 0; i < repeat; i++){
        number = parseFloat(prompt(`Dame el ${i + 1} valor`));
        while(opcion !== 1 && opcion !== 0){
            opcion = parseInt(prompt(`¿Deseas sumar ${number} al total? \n Presiona 1 para sumarlo.\n Presiona 0 para NO sumarlo.`));
        }
        if(opcion === 1){
            sumaTotal += number;
            serieNumber.push(number);
        }
        opcion = false;
    }
    console.log(`La suma total de los numeros que elegiste [${serieNumber.join(' + ')}] es: ${sumaTotal}`);
}

plusAuthorized();

// Reto # 9
function numberLine(){
    let typeOfNumberLine = false;
    while(typeOfNumberLine !== 1 && typeOfNumberLine !== 0){
        typeOfNumberLine = parseInt(prompt('¿Deseas una recta numerica o positiva?\n Presiona 1 para Positiva\n Presiona 0 para Negativa'));
    }
    let limitNumber = parseInt(prompt('¿Cual quieres que sea el limite de tu recta numerica?'));
    let zero = 0;

    for(let i = 0; i < Math.abs(limitNumber) + 1; i++){
        if(typeOfNumberLine === 1){
            console.log(`${zero++}`);
        }
        if(typeOfNumberLine === 0){
            console.log(`${zero--}`);
        }
    }
}

numberLine();