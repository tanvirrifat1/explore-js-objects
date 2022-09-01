// create object using object literals

const player = {};
player.name = 'small Nirob';
player.specialty = 'batsman';
player.bat = function(){
    console.log('swing your bat');
}

// console.log(player)
// player.bat()

const student = {
    name: 'Panday',
    job: 'khai andey',
    ball: function(){
        console.log('thow ta ball')
    },
    salary : 100000,
}

// 2. object contructor
const person = new Object();
console.log(person)

// 3. object create method
// const item = Object.create(null);
const atel = Object.create(student)
console.log(atel.name)

// 4. class
class Person{
    name = 'abul';
    address = 'cor a';
    constructor(age){
        this.age = age;
    }
}

const person1 = new Person(56);
console.log(person1)

// 5. function

function Car(model, price){
    this.model = model;
    this. price = price;
}
const tesla = new Car('elon', 320)