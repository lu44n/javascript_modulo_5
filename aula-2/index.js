// const book = {
//     title: "Eragon",
//     pages: 468,
//     published: true,
//     inStock: 20,
//     tags: ["fantasia", "aventura", "medieval"],
//     author: {
//         name: "Christopher Paolini"
//     },
//     addOnStock(quantity) {
//         this.inStock += quantity
//     }
// }

function Book (title, pages, tags, author) {
    this.title = title
    this.pages = pages
    this.tags = tags
    this.author = author
    this.published = false
    this.inStock = 0
    this.addOnStock = function addOnStock(quantity) {
        this.inStock += quantity
    }
    this.save = function () {
        // salva os dados no banco de dados
    }
}

const author = {name: "Christopher Paolini"}
const tags = ["fantasia", "aventura", "medieval"]

const eragon = new Book("Eragon", 468, tags, author)
eragon.addOnStock(5)

console.log(eragon)

const eldest = new Book("Eldest", 644, tags, author)
eldest.addOnStock(6)

console.log(eldest)