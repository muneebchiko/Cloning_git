console.log('error handling');
console.log('try.....catch'); //used to detect error

// console.log(name);
// try{
//   //  console.log('name');
//   console.log(name);
// }catch(error){
//      //console.log('name is not defined');
//      console.log(error);
// }
// console.log('end');

// let name= 'ali';
// try{
//   if(name==='saba'){
//     return 5;
//   }
//   else{
//     throw Error('name is not saba')
//   }
// }catch(error){
//      //console.log('name is not defined');
//      console.log(error);
// }
// console.log('end');


// on server error 404 (page not found)
// 401 (unauthorized)
// 200(sucess)
// 500 

//example

const username=[
    {
        user_name:'touseef',
        password:'1234'
    },
    {
        user_name:'warisha',
        password:'12345'
    },
    {
        user_name:'urwa',
        password:'123456'
    }
]

// const userData=[

// ]
let userName='warisha';
let password='12345';

try{
    let userData= username.find(values =>
    values.user_name === userName &&
    values.password === password);
    if(!userData){
throw Error('user not found')
    }
    else{
        console.log(userData);
    }

}catch(error){
    console.log(error)
}


// finnally jana hi hai 

// try{
// console.log('classroom');
// }
//  catch(error){
//     console.log(error);

// }
//  finally{
//     console.log('Bunk');

// }

let className='webdev'
try{
    try{
console.log(classroom);
    }catch(error){
        console.log(error);
    }
    try{
        console.log(projector);
    }catch(error){
        console.log(error);
    }
    try{
        console.log(className);
    }catch(error){
        console.log(error);
    }

}catch(error){
    console.log(error);
}