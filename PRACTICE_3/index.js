//for exercise of hacker rank;
//staircase
function staircase(n){
    for(let i=0;i<n;i++){
        for(let j=1;j<=n;j++){
            if((i+j)<n){
            process.stdout.write(' ')
        }
        else{
            process.stdout.write('#')
        }
        }
        process.stdout.write("\n")
    }
}
staircase(4);




//functions

function subtract(a,b){
   return a-b;
}

const res = subtract(15,8);
console.log(res);

function sum(a,b){
    return a+b;
}
const ress = sum(57,120);
console.log(ress);

//arrow functiom  
 

//ternary operator ?  :  ;  alternate to if else

let a=3 , b=4;
const result = a>b ? a : b;

console.log(result);


let value_1 = 5;
let value_2 = 10;

console.log(value_1>value_2);
console.log(value_1<value_2);

let value_string1= '8danish';  //camelCase
let value_string_1= '7asim'; //snake_case
let value= 3456678;
console.log(value.length);  // we cannot find the length of numbers 
console.log(value_string1.length);
console.log(value_string1>value_string_1);
console.log(value_string1<value_string_1);   //due to order of alphabets
console.log(value_string1===value_string_1);   //first number(0123) then alphabets

let stringvalue = '';
if(stringvalue==''){                 //for checking the string is null or not
    console.log('null');
}
if(stringvalue.length==0){
    console.log('null');
}
if(stringvalue){               // run if it is not empty, also we can use not(!) operator
    console.log('empty');    
}

let udval;
console.log(udval);   //undefined means value is not defined


let udvall = null;
console.log(udvall);   

// string divided by number give us output (not a number)

// const course1 =(ai,wd,seo,cs) => {
// if (ai){
//     return ai;
// }
// else if(wd){
//     return wd;
// }
// else if(seo){
//     return seo;
// }
// else if (cs){
//     return cs;
// }
// else {
//     console.log('chal baar ho');
// }
// }

//both are alternate 

// using arrow operator =>

const course =(ai,wd,seo,cs) => ai || wd || seo || cs || 'chal baar ho'
const response =
course('',null,null,'')
console.log(response);



const coursedirec= (js,db,html) =>js && html && db && 'pass'
const responsee= 
coursedirec('js','db','html');
console.log(responsee);

