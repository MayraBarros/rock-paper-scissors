const paintUserChoice = () =>{
    let getOptions = document.querySelectorAll('.iconos-juego');

    getOptions.forEach(item => item.addEventListener('click', (e)=>{
        const getEvent = e.target;
        const getId = getEvent.getAttribute('id');

        getOptions.forEach(elem => elem.classList.remove('active'));
        document.querySelector(`.iconos-juego[id="${getId}"]`).classList.add('active');

        getComputerChoice();
    }))
}


const getComputerChoice = () =>{
    const randomNumber = Math.floor(Math.random() * 3);
    const getComputerOptions = document.querySelectorAll('.iconos-maquina');
    
    getComputerOptions.forEach(elem => elem.classList.remove('active'));


    switch(randomNumber){
        case 0:
            document.querySelector(`.iconos-maquina[id="Piedra"]`).classList.add('active');
            determinWinner();
            break;
        case 1:
            document.querySelector(`.iconos-maquina[id="Papel"]`).classList.add('active');
            determinWinner();
            break;
        case 2:
            document.querySelector(`.iconos-maquina[id="Tijera"]`).classList.add('active');
            determinWinner();
            break;        
    }

    
}

const determinWinner = () =>{
    const userChoice = document.querySelector('.iconos-juego.active').id
    const computerChoice = document.querySelector('.iconos-maquina.active').id;
    const resultadoContainer = document.querySelector('#resultado');
    let resultadoFinal;

    if(userChoice === computerChoice) {
        resultadoFinal = 'Es un empate!';
        return resultadoContainer.innerHTML = `${resultadoFinal}`
    }

    if(userChoice === 'Piedra'){
        if(computerChoice === 'Papel'){
            resultadoFinal = 'Computadora Gano'
        } else {
            resultadoFinal = 'Muy bien! Ganaste esta batalla!'
        }
    }

    if(userChoice === 'Papel'){
        if(computerChoice === 'Tijera'){
            resultadoFinal = 'Computadora Ganó :('
        } else {
            resultadoFinal = 'Muy bien! Ganaste esta batalla!'
        }
    }

    if(userChoice === 'Tijera'){
        if(computerChoice === 'Piedra'){
            resultadoFinal = 'Computadora Ganó :('
        } else {
            resultadoFinal = 'Muy bien! Ganaste esta batalla!'
        }
    }

    resultadoContainer.innerHTML = `${resultadoFinal}`

}

paintUserChoice()