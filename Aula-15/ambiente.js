let num0 = [5, 8, 2, 9, 3]
let num1 = []

num1 = num0 // passa o endereço absoluto do vetor

console.log(num0)
console.log(num1)

console.log(`O vetor tem ${num0.length} posições`)
console.log(`Posição 0: ${num0[0]}`)
console.log(`O segundo valor do vetor é (num0[1]): ${num0[1]}`)
,
num0.sort()
num0.push(1) // colocado no final da pilha depois do sort

console.log(num0)
console.log(num1)

let pos = num0.indexOf(8)
console.log(`O valor 8 está na posição ${pos}`)

pos = num0.indexOf(6)
if (pos < 0) {
    console.log(`${pos}: valor não encontrado`)
} else {
    console.log(`O valor 6 está na posição ${pos}`)
}
