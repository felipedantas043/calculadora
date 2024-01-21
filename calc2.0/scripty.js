let nine = 9
let eight = 8
let seven = 7
let six = 6
let five = 5
let four = 4
let three = 3
let two = 2 
let one = 1
let zero = 0
let n1, n2, res, operador, valor_display_array
let tem_virgula = 0

let display = document.querySelector("#display")

document.querySelector("#num9").addEventListener("click", () => {
    display.value += nine
})
document.querySelector("#num8").addEventListener("click", () => {
    display.value += eight
})
document.querySelector("#num7").addEventListener("click", () => {
    display.value += seven
})
document.querySelector("#num6").addEventListener("click", () => {
    display.value += six
})
document.querySelector("#num5").addEventListener("click", () => {
    display.value += five
})
document.querySelector("#num4").addEventListener("click", () => {
    display.value += four
})
document.querySelector("#num3").addEventListener("click", () => {
    display.value += three
})
document.querySelector("#num2").addEventListener("click", () => {
    display.value += two
})
document.querySelector("#num1").addEventListener("click", () => {
    display.value += one
})
document.querySelector("#num0").addEventListener("click", () => {
    if (display.value != 0) {
        display.value += zero
    }
})
document.querySelector("#virgula").addEventListener("click", () => {
    if (display.value == "") {
        display.value = "0,"
        tem_virgula = 1
    }else{
        if (tem_virgula != 1) {
            display.value += ","
            tem_virgula = 1
        }
    }
})

// operadores

document.querySelector("#CA").addEventListener("click", () => {
    display.value = ""
    display.placeholder = "0"
})
document.querySelector("#C").addEventListener("click", () => {
    display.value = display.value.substr(0, display.value.length-1)
})

function action(n1, n2, operador) {
    switch (operador) {
        case 1:
            res = n1 + n2
            display.value = res.toString().replace(".", ",")
            break;
        case 2:
            res = n1 - n2
            display.value = res.toString().replace(".", ",")
            break;
        case 3:
            res = n1 * n2
            display.value = res.toString().replace(".", ",")
            break;
        case 4:
            res = n1 / n2
            display.value = res.toString().replace(".", ",")
            break;
        case 5:
            res = n1 / 100
            display.value = res.toString().replace(".", ",")
        default:
            break;
    }
}
document.querySelector("#sum").addEventListener("click", () =>{
    n1 = parseFloat(display.value.replace(",", "."))
    operador = 1
    display.value = ""
    display.placeholder = "0"
    
})

document.querySelector("#sub").addEventListener("click", () =>{
    n1 = parseFloat(display.value.replace(",", "."))
    operador = 2
    display.value = ""
    display.placeholder = "0"
    
})

document.querySelector("#multi").addEventListener("click", () =>{
    n1 = parseFloat(display.value.replace(",", "."))
    operador = 3
    display.value = ""
    display.placeholder = "0"
    
})

document.querySelector("#divi").addEventListener("click", () =>{
    n1 = parseFloat(display.value.replace(",", "."))
    operador = 4
    display.value = ""
    display.placeholder = "0"
    
})

document.querySelector("#porcento").addEventListener("click", () =>{
    n1 = parseFloat(display.value.replace(",", "."))
    operador = 5
    action(n1, null, 5  )
    
})

document.querySelector("#equals").addEventListener("click", ()=> {
    n2 = parseFloat(display.value.replace(",", "."))
    action(n1, n2, operador)

})
