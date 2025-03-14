console.log("Hello")

// How to define user definded function
// 1. function delcaration
function greeting1(){
    console.log("Hello");
    
} 

greeting1();

function greeting2(name){
    //console.log("Hello " + name)
    console.log(`Hello ${name}`)
}

greeting2('Pey');

function greeting3(name){
    return "Hello " + name
}

let message = greeting3('Kev');
console.log(message);

function sum(num1=0, num2=0){
    return num1 + num2
}
console.log(sum(3,6));
console.log(sum(3));
console.log(sum(3,6,9));

// 2. Function Expersion

let f1 = sum;

console.log(f1(4,9));

const f2 = function(){
    return "Good Job"
}

console.log(f2());

// 3. Arrow function

const f3 = ()=>"Good Afternoon";

const f4 = (n1,n2)=>n1 + n2;

console.log(f3());

console.log(f4(2,8))

