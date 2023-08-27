console.log('practice_4');

const user={
    name:'touseef',
    Age: 40,
    active:false,
    discription: function getdata(){
        return 'discription';
    },
    giveNameAndAge: function getinfo(){
        return 'touseef and 21'
    },
    getinfo(){
        return 'touseef and 21'
    }
}
user.email='tauseefarshad23@icloud.com'; //to add entity in object
console.log(user.active);
console.log(user.discription);
console.log(user.discription());  // to call functiom fun()
console.log(user.giveNameAndAge());
console.log(user.getinfo());                           //we can access entity using key

//THIS operator  (if i want to access value from inside)

const userinfo={
    name:'touseef',
    Age: 21,
    active:true,
    status: function getstatus(){
        return userinfo.active;
    },
    giveNameAndAge: function getinfo(){
        return 'touseef and 21'
    },
    getAge(){
        return this.Age
    }
}
userinfo.email='tauseefarshad23@icloud.com'; //to add entity in object
console.log(userinfo.active);
console.log(userinfo.getAge());

//spread operator consist of threedots ... values utha k lata hai  (for creating copies)

console.log({...userinfo, ...user});   // if the the is already exist it will override 
console.log({...user, ...userinfo});   //dosry walay ko overide kr degi

const userinformation={             // const ki value change nai ho skti 
    name:'touseef',
    Age: 21,
    active:true,
    status: function getstatus(){
        return this.active;
    },
    giveNameAndAge: function getinfo(){
        return 'touseef and 21'
    },
    getAge(){
        return this.Age
    }
}
const userinformation2={...userinformation}
//userinformation=null;
console.log(userinformation);

console.log(userinformation2.active);

// spread is a operator , this is a keyword
 // object structuring (object k key ko seperate krna)]

 userinformation2.name;

 const{
    name: userName, Age ,status : userstatus         // alais 
 }=userinformation2;

 console.log(userName);
 console.log(Age);
 console.log(userstatus());
 //alise as  (nickname)


 //optional changing
 let courseinfor={
    name:'web dev',
    duration:6,
    //active: true
 }
 const course_status =courseinfor.active;
 console.log(course_status);


let course_infor2=null;

//destructuring acessing 
 const course_status2 =courseinfor?.active;
 console.log(course_status2);
 const objkeys = Object.keys(courseinfor)
 console.log(objkeys);

 const objvalues = Object.values(courseinfor);
 console.log(objvalues);

 const objentries= Object.entries(courseinfor);
 console.log(objentries);





 //assignment 

 const fruit={
    apple(){
        return 'apple';
    },
    banana(){
        return this.apple();
    }
 }
 console.log(fruit.banana());

 const arr= [0,1,2,3,4,5];
//  let obj={
//     getinfo(){
//         return 123;
//     }
//  }
//  obj.getinfo()

 //typical for loop
//  for(let i=0;i<arr.length;i++){
//     console.log(arr[i]);
//  }

 arr.forEach((firstparam, secparam, thrdparam) => (
    console.log(firstparam)
 )                        // is a parameterize function 
 
 )            

 //array k first me value insert krny k liye (unshift) and shift remove first value

 const arr3=[23,24,25,26,33];
//  arr.forEach((firstparam,secparam,thrdparam)=>{
    // console.log(firstparam);
    // console.log(secparam);
    // console.log(thrdparam);
    
    
 //}
 
 //)
 arr3.unshift(123);
    console.log(arr3);
    //arr.shift();

 //splice arr.splice(first index from where you want to remove)

 const removeitems= arr.splice[2,2];
 console.log(arr);
 console.log(removeitems);
//  arr3.splice[2,0,25,40,625];
//  console.log(arr3);

arr2=[2,42,5,677,89,100,123];
arr2.splice(2,0,23,12,42);  // (first index, those index how many values u wants to remove , added index)
console.log(arr2);

const removeitems2=arr.splice(2,2);   // to check the removed values
console.log(removeitems2)

//slice(1,3) removes 1 se le kr 3 tak remove kr deta hai

const halftillend= arr2.slice((arr2.length/2),arr2.length)   ///slice is for removal only
console.log(halftillend);                        // slice copy kr k orignal ko khrab nai krta , splice orignal ko bhi khrab kr deta hai

//concate
const arr4=[5,1,2,3,4,5,];
const arr5=[4,5,6,7,8];
console.log(...arr4,...arr5);    //spread operator removes []
console.log(...arr4,arr5);

// includes is an array method to check whether the value is exist or not

const isthere= arr4.includes(4);
console.log(isthere);

const checkindex= arr4.indexOf(5);   // to check the index where value exist
console.log(checkindex);
// 'const findindex= arr4.findIndex(5);   
// console.log(findindex);

//array of objects

const users=[
    {
        name:'tauseef',
        email:'tauseef@gmail.com',
        active:true
    },
    {
        name:'zoya',
        email:'zoya@gmail.com',
        active:true
    },
    {
        name:'palwasha',
        email:'palwasha@gmail.com',
        active:true
    },
    {
        name:'palwasha',
        email:'palwasha@gmail.com',
        active:false
    }

];
const zoyarecord= users.find((value)=>value.name==='zoya');
const palwasharecord= users.filter((value)=>value.name==='palwasha'&& !value.active);
const palwasharecordindex= users.findIndex((value)=>value.name==='palwasha'&& !value.active);
console.log(zoyarecord);
console.log(palwasharecord);
console.log(palwasharecordindex)


const arrname=[1,2,3,4,5];
const num2=arrname.map((x)=>x*2);
console.log(arrname);
console.log(num2);


const authusers= users.map((x)=>
{
    x.active?x.authenticated=true:null;
    return x;
}
    

)
console.log(authusers)

const a=[1,3,4,5,6,10]
//const array1=a.map((x)=> x*10)    //map function is used to get ther operated array 
// console.log(array1);


//array methods

// flat () merge child array into parent array
// reverse()
// arr.split(,) divide the indexs [l,2,4,5,6] => 12345
// arr.joim('/') ex: ['12345']=> 1/2/3/4/5
// arr.sort using comparison function (on basis of alphabet order)
// arr.reduce perfrom any operation and give conclusion in single value