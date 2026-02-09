let pets = ['dog', 'cat', 'rhino'];

let score = [5,6,7];

console.log(pets.length);

pets[3] ='bunny';
console.log(pets);

// what if u dont know who is is the back
pets.push('lizard');
console.log(pets);

//remove the last item in the array
pets.pop()
// removes first 
pets.unshift('dog');

//.foreah will call a function for every item in the array
const steps = ['one', 'two', 'three'];

// its gonna refer to the items in an aray as item
//whole prameter is the function here
steps.forEach(function(item){
    console.log(item);
});

function showSteps(item) {
    console.log(item);
}

let myList = document.querySelector('#myList');

// .map also calls a function but creates a new array from the original array
const stepsHtml = steps.map(listTemplate);

function listTemplate(item) {
    return `<li>${item}</li>`;
}

// join turns the array into a string, and we use it to remove the commas that come with an array when we put it in innerHTML
myList.innerHTML = stepsHtml.join(''); 


// original array doesnt get changed when we use .map, it creates a new array
let grades = ['A', 'B','D'];

let points;

let gpaPoints = grades.map(convert);

function convert(grade) {
    switch (grade.toUpperCase()) {
        case 'A':
            points = 4;
            break;
        case 'B':
            points = 3;
            break;
        case 'C':
            points = 2;
            break;  
        case 'D':
            points = 1;
            break;
        case 'F':
            points = 0;
            break; 
        default:
            alert('Not a valid grade');
    }
    return points;
}
console.log(gpaPoints);
console.log(grades);


//reduce returns a single value from an array
let totalPoints = gpaPoints.reduce(getTotal);
function getTotal(sum, point) {
    return sum + point;
}
console.log(totalPoints);

let gpaAvg = totalPoints / gpaPoints.length;
console.log(gpaAvg);

//filtering (.filter)is for items that match a condition
const words = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];

const shortWords = words.filter(function(word) {
    return word.length < 6;
});
console.log(shortWords);