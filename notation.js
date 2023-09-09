const students = {
    name: 'Kilim Uddin', 
    age: 16,
    class: 'ten',
    marks: {
        math: 78,
        physics: 88,
        chemistry: 66
    }
}

const marks = students.marks;
const math = students.marks.math;
const chemistry = students['marks']['chemistry'];

const subject = 'math';
const subjectMarks = students.marks[subject];

console.log(subjectMarks)