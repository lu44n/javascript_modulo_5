const Post = require('./Post')
const Comment = require('./Comment')
const Author = require('./Author')

const author1 = new Author("Mikael")
const post1 = author1.createPost("Primeiro post!", "Apenas um teste!")

const comment1 = new Comment("Akashi", "Muito bom!")
const comment2 =  new Comment("Caio", "Excelente!")

post1.addComment(comment1)
post1.addComment(comment2)

post1.displayPost()

console.log(author1)