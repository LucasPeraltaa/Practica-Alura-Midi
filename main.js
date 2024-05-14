function reproducirSonido(idElementoAudio){
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla')

for(let contador = 0; contador < listaDeTeclas.length; contador++){

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    console.log(contador)

    const idAudio = `#sonido_${instrumento}`; /*recurso de js template string: una apertura para el codigo dentro de una cadena de texto*/
    console.log(idAudio);

    tecla.onclick = function (){
        reproducirSonido(idAudio);
    }

    tecla.onkeydown = function(evento){ /*cuando usuario aprieta la tecla*/
        
        if(evento.code === 'Space' || evento.code === 'Enter'){
            tecla.classList.add('activa');
        }
    }
    tecla.onkeyup = function(){ /*remueve la clase activa*/
        tecla.classList.remove('activa');
    }
}