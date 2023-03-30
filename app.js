// const || let



// ------------------------------- Tipos de variáveis ---------------------------//

// Nomear uma variável que ela tenha uma palavra reservada = Exemplo: const true = "oi"

const a = 123 // Inteiro

const b = 124.0000000002 // Float - (Número quebrado)

const c = "Olá mundo!" // String - Conjunto de Caracteres

let d = true // FALSE || TRUE

// -------------------------------- Condicionais -----------------------------------//
// Comparações: 
//< - Menor que
//> - Maior que
// == - Igual
// != - Diferente de
// === - Estritamente igual
// <= Menor ou igual que
// >= Maior ou igual que
// || - OU
// && - E


if (a > b){
    console.log("A é maior que B")
}
else if (a == b){
    console.log("A é igual a B")
}
else{
    console.log("A é menor que B")
}

// ------------------------------ Laços de repetição ---------------------------//
// While - Enquanto
// For - Para um item em uma condição faça isso




while(d === true) {
    console.log("D é verdadeiro!")
    d = false
}

for(let i = 0; i < c.length; i++){
    console.log(c[i])
}

//---------------------------------- Array -------------------------------------//

const lista = [

    120, // 0
    2, // 1
    3, // 2
    4, // 3
    5, // 4
    6, // 5
    7, // 6
    8, // 7
    9, // 8
    10, // 9
    11, // 10
    12, // 11
    13, // 12
    14,// 13
    15 // 14

]

for (let i = 0; i < lista.length; i++){

    console.log(lista[i])

}

// ---------------------------- Função --------------------- //

function ValorTotal(valor) {
    
    let aux = 0

    while(valor[aux]){
        aux++
    }

    return aux


}

console.log(ValorTotal(lista))