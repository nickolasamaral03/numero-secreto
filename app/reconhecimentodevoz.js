const elementoChute = document.getElementById('chute')

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br'
recognition.start()

recognition.addEventListener('result', onSpeak)

function onSpeak(e){
    chute = e.results[0] [0].transcript
    exibeChuteNaTela(chute)
    verificaSeOChutePossuiUmValorValido(chute)
    GameOver(chute)
    JogarNovamente(chute)
    FundoBlack(chute)
    FundoRed(chute)
}

function FundoBlack(chute){
    if(chute === 'Black'){
        document.body.style.backgroundColor = 'black';
    }
}

function FundoRed(chute){
    if(chute === 'Red'){
        document.body.style.backgroundColor = 'red';
    }
}

function GameOver(chute){
    if(chute === 'game over'){
        document.body.innerHTML = `<div class="game-over">GAME OVER</div> <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>`
    }
}

function JogarNovamente(chute){
    if(chute === 'jogar novamente'){
        window.location.reload()
    }
}

function exibeChuteNaTela(chute){
    elementoChute.innerHTML = `
    <div>Você disse:</div>
    <span class='box'>${chute}</span>
    `
}

recognition.addEventListener('end', () => {
    recognition.start()
})
