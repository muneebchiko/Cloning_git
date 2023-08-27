let name ='touseef';
const typeName  = typeof(name);
//typeof name;
console.log(name, typeName);

name = 5;
const typeName2 = typeof(name);
console.log(name, typeName2);
// type script is updated lang of javascript
// java was called live script , after some amendment it is known as acmasccript

//boolean

let lightStatus= false;
let ledStatus=true;
console.log(typeof(ledStatus));
console.log(typeof(lightStatus));

//image is a form of matrics    1920 X 1080

//array k liye square brackets[]

//class objects k liye curly barces {}

const arrayOfNumbers =[1,2,3,4,9]; //wants to acess 3
console.log(arrayOfNumbers[2]);



const lngth=arrayOfNumbers.length; //array ki length find krny k liye .length
console.log(arrayOfNumbers[lngth-1]);


//pass by reference(address) contains arrays and objects
// and pass by value

//for adding push

const arr=[1,2,3,4,5];
arr.push(76,77,88);//for adding elements
console.log(arr);



//for poping delete
const arr2=[1,2,3,4,5];
arr2.pop();//for deleting elements
console.log(arr2)


const arrofallrounder=[
    1,
    'touseef',                    //array for all rounder
    true,
    [5,5,5,5]
];
console.log(arrofallrounder);


// objects
     //packageing a set of variables inside a container  is called object
   
const obj={
    name:'tauseef',
    rollno:1,
    attentence:true,
    scores:[6,6,6,6],
    coursescore:{
        js:10,
        html:20
    }
};

console.log(obj.name);   //using dot we can access any value

//to manupulate any key

obj.coursescore={
    js:50,
    html:70
}

obj.scores= [5,6,7,8];
console.log(obj.coursescore);


const html= obj.coursescore.html;
console.log(html);



//conditional programming
 
let weather= 'rain';
if(weather=== 'rain')
{
console.log('umbrella is required')
}
else if(weather==='sunny')
{
    console.log('umbrella is not required')
}
// OR operater
let weather1= 'rain';
if(weather1=== 'rain'|weather1 === 'sunny')
{
console.log('umbrella is required')
}
else if(weather1==='sunny')
{
    console.log('umbrella is not required')
}

// AND operator

let js=5;
let css=10;
if(js>=5 & css>= 5)
{
    console.log('pass')
}
else
{
console.log('fail')
}

// == value same honi chahiye datatype ka issue nai hota , blank spaces ko remove kr deta hai, apne tor pr kaam chalana shuru kr deta hai
// ===  datatype or value dono same honi chahiye

let value = 5;
if ( value== '5') console.log(true)
else console.log(false);


let value1 = 500;
if ( value1== ' 500') console.log(true)
else console.log(false);
 

// loops

//for loop (jb tak)
//while (k liye)

let weather2='rain';
let count=0;
// while(weather2 == 'rain'){
//     console.log('it is raining');
//     count +=1;
//     console.log(count)
//     if (count ==5){
//         weather2 = 'sunny'   
//     }
// }
while(true){
while(weather2 == 'rain'){
         console.log('it is raining');
         count +=1;
         console.log(count)
         if (count ==5){
             console.log(weather2)
             break;   
         }
     }
     break;
    }

    // for loop

    const arr3 =[1,2,3,4,5];
    const arr3_1=[];
    for (let i=0;i<arr3.length;i++)
    {
        const  multiple =arr[i]*2;
        arr3_1.push(multiple);

    }
console.log(arr3_1);

// Function

// function add()
// {
//     let a = 5;
//     let b = 10;
//     let c = a+b;
//     console.log(c);
// }

// add();

function addbyparams(a,b)
{
    let c = a+b;
    return c;
}
const output_1=addbyparams();
const output_2=addbyparams(10,20);
console.log(output_1,output_2);