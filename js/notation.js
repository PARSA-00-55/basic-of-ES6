const student = {
    name: 'Kolim Uddin',
    age: 15,
    class: 'Ten',
    marks: {
        math: 78,
        physics: 89,
        chemistry: 65
    }
}

//useing dot is called dot notation 
const marks = student.marks;
const math = student.marks.math;

//another kind bracket notation
const chemistry = student['marks']['chemistry'];

//finding an object value
const subject = 'math';
const subjectMarks = student.marks[subject]; 

console.log(chemistry);






