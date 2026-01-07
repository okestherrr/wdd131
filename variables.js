
const PI = 3.14;
let radius = 3;
                //   let can be reassigned, const cannot
                // var is outdated but is the same as let
let area = radius * radius * PI;
console.log(area);
                // live server< inspect< console to see the output

radus = 20;//##
area = radius * radius * PI;
console.log(area);

radius = 50;
console.log(radus); //##
// careful with variable names because program will make a new variable if you mistakenly change the name

//__________________________ numbers __________________________//
const one = 1;
const two = '2';

let result = one * two;
console.log(result); // result is 2 because of multiplication

result = one + Number(two);
console.log(result); // This turns in to number ( 3 )

result = one + two;
console.log(result); // This turns in to string( '12', is not twelve but one an two together)

// __________________________ strings __________________________//

let course = "CSE131"; //global scope
if (true) {
    let student = "John";
    console.log(course);  //works just fine, course is global
    console.log(student); //works just fine, it's being accessed within the block
}
console.log(course); //works fine, course is global
// console.log(student); //does not work, can't access a block variable outside the block
                    s
console.log('hello world'); 