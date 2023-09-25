var c = 1
while (c <= 6) {
    console.log(`Contei c: ${c} vezes`)
    if (c > 3) {
        break // encerra a execução
    }
    c++
}
console.log(c)

console.log('=========================')

var d = 1
do {
    console.log(`Contei d: ${d} vezes`)
    d++
} while (d <= 6)
console.log(d)
/*
console.log('Tudo bem?')
console.log('Tudo bem?')
console.log('Tudo bem?')
console.log('Tudo bem?')
console.log('Tudo bem?')
console.log('Tudo bem?')
*/