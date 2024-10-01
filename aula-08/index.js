const Address = require('./Address')
const Person = require('./Person')

const addr = new Address("Pedro de Godói", 269, "Vila Prudente", "São Paulo", "SP")
const mikael = new Person("Mikael", addr)

console.log(mikael)
console.log(mikael.address.fullAddress())