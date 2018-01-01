import { setTimeout } from "timers";

const promise = new Promise((resolve,reject)=>{
    setTimeout( ()=>{
        // resolve('This is my resolve data');  
        // resolve('hey'); //  only singlr time
        reject("sth went wrong");
    },6000);
});

console.log("before");

promise.then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.log(error);
});

// promise.then((data)=>{
//     console.log(data);
// },(error)=>{
//     console.log(error);
// }) 

console.log('after');
