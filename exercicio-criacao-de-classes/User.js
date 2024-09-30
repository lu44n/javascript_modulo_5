class User {
    constructor(fullname, email, password) {
        this.fullname = fullname
        this.email = email
        this.password = password
    }

    login(email, password) {
        if (this.email === email && this.password === password) {
            console.log("Login successful!")
        } else {
            console.log("Invalid email or password.")
        }
    }
}

const user1 = new User("Mikael Martins", "luanmikaelmartins@gmail.com", "mikael123")

console.log(user1)

user1.login("luanmikaelmartins@gmail.com", "mikael123")