console.log('practice 7');
console.log('sync & Async'); // sync (do things one by one ) Async (means multitasking) 
//callback hell / pyramid of doom => se bachny k liye (promises / Async await)

// function printName(){
//     console.log('info');
// }
// console.log('start');
// //settimout is an Async function
// setTimeout(printName, 5000);
// setTimeout(()=>console.log('3 sec'), 5000);
// console.log('after set timout');

// event loop ()
// java script is a single threaded language
// yts.com/ the social network
// javascript handle mutil threads using async (event loop)
// settimeout /setinterval

// try{
// setTimeout(()=>console.log('try'),5000)
//  }catch(error){
//      console.log(error);

//  }
//  console.log('after try catch');


// set interval

// setInterval(()=>console.log('3000 try catch'),3000)
// console.log('after try catch');


//promises (resolve , rejected) is also an Async function
// let username='class';
// const promise= new Promise((resolve,reject)=>{
//     if(username ==='class')resolve(username);
//     if(username !='class')reject('username is not class');
// });
// promise.then((x)=>console.log(x)).catch((x)=>console.log(x)).finally(()=>console.log('promise is ended'))    //resolve wala then k sath chalta hai.
// //how async debate  differ from promises


//promise  chaining (using then again and again) 

// const promise2= new Promise((resolve,reject)=>{
//     setTimeout(()=>resolve(2),3000)
// })
// promise2.then(x=>{
//     return setTimeout(()=>{
//     console.log(x*2)
//     return x*2;
//     },3000)
// })


// api's (application protocol interface) to get the data from url  we use fetch
// fetch is an async function
fetch('https://reqres.in/api/users?page=1')
.then(response =>response.json ()).then (data=>console.log(data))

