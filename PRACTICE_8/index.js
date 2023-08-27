console.log('Practice_8');
console.log('async Await');

//fetch('https://reqres.in/api/users?page=1');

const callapidata= async () =>{
 const res= await fetch('https://reqres.in/api/users?page=1'); //jaisy hi await mily ga function ko event loop(box) me phaink dega
  console.log('awaiting res.json()');
  console.log(await res.json()); // res.json is also a async function so we gotta use await
  console.log(1);
  console.log(2);
  console.log(3);
  
};
console.log(callapidata());

const callapi= async ()=>{
    const response =await callapidata()
    console.log('data return from callapidata',response);
  
}
console.log(callapi()); 

// const showdate=()=>{
//     const d=new Date;
//     const date= d.toTimeString().split(' ')[0]
//     return date
// }
// console.log(showdate());