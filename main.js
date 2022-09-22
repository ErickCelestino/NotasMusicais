function toca_Som (seletorAudio)
{
    const elemento = document.querySelector(seletorAudio);
    if(elemento === null){
        return console.log("Não existe esse elemento");

    } else if(elemento.localName === 'audio' && elemento) {
        elemento.play();
        
    } else {
        return console.log("Elemento inválido");
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');

/*let contador = 0;

while(contador < listaDeTeclas.length)
{  
    const tecla = listaDeTeclas[contador];

    //Pegando o nome do instrumento 
    const instrumento = tecla.classList[1];

    //Template String
    const idAudio = `#som_${instrumento}`

    tecla.onclick = 
    function()
    {
        toca_Som(idAudio);
    };
    contador++;
    console.log(contador);
}*/

for(let contador = 0;contador <listaDeTeclas.length;contador++){
    
    const tecla = listaDeTeclas[contador];

    const instrumento = tecla.classList[1];

    const idAudio = `#som_${instrumento}`;
    
    //quando clicam na tecla
    tecla.onclick = function(){
        toca_Som(idAudio);
    };

    //Quando uma tecla é apertada
    tecla.onkeydown = function(evento){
    
        //.code mostra a tecla que foi apertada ou melhor o codigo da tecla apertada    
        if(evento.code === 'Space' || evento.code === 'Enter' || evento.code === 'NumpadEnter'){
            tecla.classList.add('ativa');
        }
        
    }

    //Quando o usuário solta a tecla
    tecla.onkeyup = function(){
        tecla.classList.remove('ativa');
    }

}