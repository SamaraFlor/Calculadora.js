
function calculadora(num1, num2, soma = '+', subtracao = '-',multiplicacao = '*',divisao = '/') {

    soma = prompt("Informe uma operação: ")
    subtracao = prompt("Informe outra operação: ")
    multiplicacao = prompt("Informe uma operação: ")
    divisao = prompt("Informe uma operação: ")
  
    if ((soma == "+") && (subtracao == '-')) {
      return num1 + num2;
      return num1 - num2;
    }
    if((multiplicacao == "*") && (divisao == '/')) {
        return num1 + num2;
        return num1 - num2;
      }else {
      console.log("Operacão Inválida!")
    }
  }
  
  console.log(calculadoraAdicaoSubtracao(10, 20))
  console.log(calculadoraAdicaoSubtracao(45, 16))

