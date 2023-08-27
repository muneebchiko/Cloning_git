//Q1
const { isEmpty, multiply, keys, forEach } = require("lodash");

let user={
    

}
console.log(isEmpty(user));
if(!Object.keys(user).length){
    console.log("object is empty");
}

user={
    name:'john',
    surname:'smith',
    
}
console.log(user);
user.name ='pete';
console.log(user);
delete user.name;
console.log(user);

//question #3

let salaries={
    john:100,
    ann:160,
    pete:130
}

let sum =0;
let value=Object.values(salaries)
value.forEach((values)=>{
    sum=sum+values;
});
console.log(sum);
 
//Q#4

let menu = {
    width: 200,
    height: 300,
    title: 'My menu'
}

// function multiplyNumeric(obj){
//     Object.keys(obj).forEach((key) =>{
//         if(typeof obj[key]==='number'){
//         obj[key] *= 2;
//       }
//     }
//     );
// }

// multiplyNumeric(menu);
// console.log(menu);

function multiplyNumeric(x){
    // Object.keys(x).forEach((key) =>{
    //     if(typeof x[key]=== 'number'){
    //         x[key]*=2;
    //     }
    // })

    for(key in menu){                               // we can use forIn loop for object iterations 
        if(typeof menu[key]=== 'number'){
            menu[key]*=2;
        }
    }
};
multiplyNumeric(menu);
console.log(menu);


//Q=5



const object={
     funct: function add(a,b){
        console.log(a+b);
     }
}
object.funct(20,70);



//assesment

//Q1

const style=['jazz','blues'];
style.push('Rock-an-Roll');
style.splice((style.length-1)/2,1,'classics');

console.log(style.shift());
console.log(style.unshift('rap','reggae'));
console.log(style);


// q#2

const a=[1,2,3,4,5];
// let suma=0
// function suminput(){
//     a.forEach(n=>suma+=n)
    
//     return suma;
// }
// console.log(suminput());
let sum1=a.reduce((acc,i)=>{
    return acc+i;
})
console.log(sum1);


// for of loop is the  advance form of forEach , and used for array

// for(Element of a){   
//     Element+=suma;   
//     return suma;
// }
// console.log(suminput(a));


// for In loop used for object iteration 

let obj1={
    Name:'touseef',
    Salary: 2 ,
    channel:'tauseefmalk'
}

function mult(){
for(key in obj1){
//  console.log(`the ${key} of employee is ${obj1[key]}`);
    if(typeof obj1[key]==='number'){
        obj1[key]*=2;
    }
}};
mult(obj1);
console.log(obj1)


let ar=[1,20,40,50,500,5001];
let d=ar.filter((x)=>{
    return x%10===0;
})
console.log(d);

let ar1=[1,20,40,50,500,5001];
let sq= ar1.map((i)=>{
    return i*i;
})
console.log(sq);

let ar2=[1,20,40,50,500,5001];
let re=ar2.reduce((n,i)=>{
    return n,i;
})
console.log(re);

