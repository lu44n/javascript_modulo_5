class Post {
    constructor(title, content, author){
        this.title = title
        this.content = content
        this.author = author
        this.comments = []
    }

    addComment(comment){
        this.comments.push(`${comment.author} | ${comment.content}`)
    }

    displayPost() {
        console.log(`Título: ${this.title}`);
        console.log(`Autor: ${this.author.name}`);
        console.log(`Conteúdo: ${this.content}`);
        console.log('Comentários:');
        this.comments.forEach(comment => {
            console.log(comment);
        });
        console.log('----------------------');
    }
}

module.exports = Post