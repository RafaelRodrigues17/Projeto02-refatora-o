function calcular(){
    var batata1 = parseFloat(document.getElementById("num1").value)
    var batata2 = parseFloat(document.getElementById("num2").value)
    var operador = document.getElementById("operador").value

    switch (operador) {
        case "+": 
            resultado = batata1 + batata2
            break;
        case "-":
            resultado = batata1 - batata2
            break;
        case "*":
            resultado = batata1 * batata2
            break;
        case "/":
            if(batata2 !== 0){
                resultado = batata1 / batata2
            }else{
                resultado = "Erro: Divisão por 0 não existe"
            }
            break;
 
        default:
            resultado = " Operador inválido"          
    }
    document.getElementById("resultado").textContent = resultado
}
