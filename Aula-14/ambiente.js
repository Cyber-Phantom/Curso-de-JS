var c = 1
while (c <= 6) {
    console.log(`Com while c = ${c}`)
    c++
}

console.log('====================')

for (var c = 1; c <= 6; c++) {
    console.log(`Com for c = ${c}`)
    if (c > 3) {break}
}