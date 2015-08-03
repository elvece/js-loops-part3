//global variables
var students = [
  {
   name: 'Derek',
   age: 25,
   city: 'Boulder'
  },
  {
   name: 'Liz',
   age: 28,
   city: 'Denver'
  },
  {
   name: 'Carl',
   age: 31,
   city: 'Boulder'
  },
  {
   name: 'Peter',
   age: 23,
   city: 'Boulder'
  },
  {
   name: 'Megan',
   age: 19,
   city: 'Denver'
  }
];

//example
function exampleLoop(arr) {
  arr.forEach(function(student) {
    console.log(student.name);
  });
}
exampleLoop(students);

//problem 1: for each student in the students array, console log the student's age
students.forEach(function(student) {
    console.log(student.age);
});

//problem 2: for each student in the students array, console log the student's name and their city seperated by a comma
students.forEach(function(student) {
  console.log(student.name + ", " + student.city);
});

//problem 3: for each student in students array, if the city is equal to boulder, consolelog the student's name and city in a nice format
students.forEach(function(student) {
  if (student.city === 'Boulder'){
  console.log(student.name + " is from " + student.city);
  }
});

//problem 4: for each student in students array, if the student's age is greater than 25, console log in a nice format
students.forEach(function(student){
  if (student.age > 25){
    console.log(student.name + " is older than 25");
  }
});












