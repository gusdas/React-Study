const person = {
    firstName : 'John',
    lastName : 'Doe',
    get fullName() {
       return `${person.firstName} ${person.lastName}`
    },
    set fullName(value) {
        const parts = value.split(' ')
        this.firstName = parts[0]
        this.lastName = parts[1]
    }
}


person.firstName = 'hie'
console.log(person);