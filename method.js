 const student = {
    name: 'kodom ali',
    money: 5000,
    studay: 'MATH',
    subjects: ['calculus', 'Algebra', 'geometry'],
    exam: function(){
         return this.name + 'is participiting in an exam';
    },
     improveExam: function(subject){
        this.exam();
        return `${this.name} is takeing improvement exam on ${subject}`
     },
     treatDay: function(amount, tips){
        this.money = this.money - amount - tips;
        return this.money;
     }
 } 
const output =  student.exam();
// console.log(output)
const reExam = student.improveExam('Algebra');
// console.log(reExam)
const remining = student.treatDay(900, 100);
console.log(remining);
const dolaRemining = student.treatDay(500, 50);
console.log(dolaRemining)