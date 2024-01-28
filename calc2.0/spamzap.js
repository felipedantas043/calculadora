
function SendMessage(mensagem, time) {
    for (let i = 0; i < time; i++) {
        setTimeout(() =>{
            Message(mensagem)
        }), 200}
}