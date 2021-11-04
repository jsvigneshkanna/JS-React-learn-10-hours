/*
Content for learning:
1. Let vs Var vs Const
2. Objects
3. this keyword
4. Binding this
5. arrow function
6. map method
7. object destructing
8. spread operator
9. class & objects
10. inheritence
11. modules
12. Names and Default exports

Reference: https://www.youtube.com/watch?v=NCwa_xi0Uuc&t=629s
*/


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

// Map learnings
const personAge = people.map((person) => {
    return (person.age);
})
// console.log(personAge);


// Arrow Functions Learnings
// Normal function
const square1 = function (number) {
    return number * number
};
// Arrow function
const square2 = number => number * number
// console.log(square1(4), square2(45));

// normal filter method with predicament function
const personBelow25 = people.filter(function (person) {
    return person.age <= 25
});
// filter method with arrow function to reduce noise in code 😎
const personBelow25Arrow = people.filter(person => person.age <= 25);
// console.log(personBelow25, personBelow25Arrow);



// Object destructuring
const personDetails = {
    name: 'wanda',
    age: 17,
    school: 'TVS' 
}
/*
const name = personDetails.name // normal assigning object attribute to other variable
const age = personDetails.age
*/
const { name, age, school } = personDetails
// console.log(name, age, school);

// Using alias for destruction object name
const { age: years } = personDetails
// console.log(years);



/*
Spread operators: to combine arrays, objects etc
*/
const first = [1,2,3]
const second = [4,5,6]
const normalCombine = first.concat(second)
const spreadCombine = [...first, ...second]
// console.log(normalCombine, spreadCombine);
// cloning array
const cloneFirst = [...first]
// console.log(cloneFirst);


/* 
class/ objects: to create blueprint for reduntant objects
*/

class Person {
    constructor (name) {
        this.name = name
    }
    walk () {
        console.log(this.name, ' walking');
    }
}
const person1 = new Person('ram') // new operation !important
const person2 = new Person('sam')
person1.walk()
// console.log(person1.name);


 