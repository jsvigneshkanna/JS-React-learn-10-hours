const people = [
    {
        name: 'john',
        age: 25,
        job: 'intern'
    },
    {
        name: 'michael',
        age: 26,
        job: 'thief'
    },
    {
        name: 'amanda',
        age: 32,
        job: 'wife'
    },
    {
        name: 'cj',
        age: 21,
        job: 'robber'
    }
]

people.map((person) => {
    console.log(person.age);
})
