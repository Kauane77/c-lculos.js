alert ("Essa página diz")
let FirstNumber = prompt("Digite o primeiro número")
let SecondNumber = prompt("Digite o segundo número")

FirstNumber = Number (FirstNumber)
SecondNumber = Number (SecondNumber)

const sum = FirstNumber + SecondNumber
const sub = FirstNumber - SecondNumber
const multi = FirstNumber * SecondNumber
const div = FirstNumber / SecondNumber
const restDiv = FirstNumber % SecondNumber

alert ("a soma dos dois números é: " + sum)
alert (" a subtração dos dois números é: " + sub)
alert (" a multiplicação dos dois números é: " + multi)
alert (" a divisão dos dois números é: " + div)
alert (" o resto da divisão dos dois números é: " + restDiv)



if (sum % 2 === 0) {
 alert ("A soma dos dois números é par")
}
else {
    alert ("A soma dos dois números é ímpar")
}

if ( FirstNumber === SecondNumber ) {
     alert ("Os números inseridos são iguais")
    }
else {
    alert ("Os números inseridos são diferentes")
    }
