##JavaScript Loops - Part 3

***This repo contains my solutions to the following exercise:***

1. Using the Yeoman [generator-galvanize-html](https://github.com/gSchool/generator-galvanize-html), generate a project boilerplate.
1. Solve each of the given problems, writing a loop that outputs the given output to the JavaScript console. **Make sure to use the [functional progrmming methods](https://github.com/gSchool/g11-course-curriculum/tree/master/week04/04_lectures/js-functional-programming) `forEach()`, `map()`, `filter()`, and `reduce()` to solve these probelms.**
1. Want some stretch goals?
    - First write the functions using vanilla JavaScript loops and then refactor using the functional methods.
    - Use the [Underscore.js](http://underscorejs.org/) methods to solve.
    - Use the [Lodash](https://lodash.com/) methods to solve.
    - Write a brief writeup on Underscore vs Lodash. Which do you prefer?
1. Use the following global variable for each of the problems ->

  ```javascript
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
  ```

### Example

#### Output in the console:

```sh
Derek
Liz
Carl
Peter
Megan
```

#### Solution

```javascript
function firstLoop(arr) {
  arr.forEach(function(student) {
    console.log(student.name);
  });
}

firstLoop(students);
```

## Problems

**Problem 1**

```sh
25
28
31
23
19
```

**Problem 2**

```sh
Derek, Boulder
Liz, Denver
Carl, Boulder
Peter, Boulder
Megan, Denver
```

**Problem 3**

```sh
Derek is from Boulder
Carl is from Boulder
Peter is from Boulder
```

**Problem 4**

```sh
Liz is older than 25
Carl is older than 25
```
