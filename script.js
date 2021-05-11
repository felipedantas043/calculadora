let n1 = document.getElementById('n1')
let n2 = document.getElementById('n2')  
let n3 = document.getElementById('n3')
let n4 = document.getElementById('n4')
let objetivo = document.getElementById('objetivo')


function media(n1, n2, n3, n4) {
    let m = (Number(n1) + Number(n2) + Number(n3) + Number(n4)) /4
    return m
}
function calcular() {
    let max = 10
    let min = 0
    let res = document.getElementById('res')
    if (n1.value > max || n2.value > max || n2.value > max || n3.value > max ) {
        alert('Suas notas não podem ser maior que 10.')
    }else if(n1.value < min || n2.value < min || n2.value < min || n3.value < min ){
        alert('Suas notas não podem ser menor que 0')
    }else{
        let resultadoMedia = media(n1.value, n2.value, n3.value, n4.value)
        if (objetivo.value.length == "") {
            res.innerHTML = `Sua média foi ${resultadoMedia}. `
        }else{
            res.innerHTML = `Sua média foi ${resultadoMedia}. `
            if (resultadoMedia >= objetivo.value) {
                res.innerHTML += ` Parabéns! Você alcançou sua média.`
            }else{
                res.innerHTML += ` Para alcançar a sua média, você precisa de mais ${objetivo.value-resultadoMedia} pontos.`
            }
        }
    }
    
}
