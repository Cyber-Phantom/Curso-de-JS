function parimp(n) {
    if (n%2 == 0) {
        return 'Número par'
    } else {
        return 'Número impar'
    }
}

let res = parimp(5)
console.log(res)

console.log(parimp(4))