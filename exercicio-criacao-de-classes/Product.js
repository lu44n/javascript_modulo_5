class Product {
    constructor(name, description, price) {
        this.name = name
        this.description = description
        this.price = price
        this.inStock = 0 
    }

    addToStock(quantity) {
        this.inStock += quantity
    }

    calculateDiscount(percent) {
        return this.price - (this.price * (percent / 100))
    }
}

const product1 = new Product("Laptop", "Intel Core i7", 1200)
console.log(product1)

product1.addToStock(5)
console.log(product1)

console.log(product1.calculateDiscount(50))