let amigo = { nome: 'jose', 
              sexo: 'M', 
              peso: 85.4,
              engordar(p=0) {
                console.log(`Engordou + ${p} kg.`)
                this.peso += p
              }
            }

console.log(typeof amigo)
console.log(amigo)
console.log(`${amigo.nome} pesa ${amigo.peso} kg.`)

amigo.engordar(3)
console.log(`${amigo.nome} pesa agora ${amigo.peso} kg.`)
