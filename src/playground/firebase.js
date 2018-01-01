import * as firebase from 'firebase';

// initializeApp
var config = {
    apiKey: "AIzaSyDZHyDe8kxYy_sB1Vky2UoM94cE9Ctny1M",
    authDomain: "expensify-ced07.firebaseapp.com",
    databaseURL: "https://expensify-ced07.firebaseio.com",
    projectId: "expensify-ced07",
    storageBucket: "expensify-ced07.appspot.com",
    messagingSenderId: "819298184146"
  };

firebase.initializeApp(config);

const database=firebase.database();

// database.ref("Expenses").once('value')
// .then((snapshot)=>{
//     const expenses=[];
//     snapshot.forEach((childSnapshot)=>{
//         expenses.push({
//             id:childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });
//     console.log(expenses);
// });

// 
// database.ref("Expenses")
// .on("child_removed",(snapshot)=>{
//    console.log(snapshot.val(),snapshot.key);
// })


// database.ref('Expenses').on("child_removed",(snapshot)=>{
//     console.log(snapshot.key,snapshot.val());
// });

// database.ref("Expenses").on("child_changed",(snapshot)=>{
//     console.log(snapshot.key,snapshot.val());
// });
// database.ref("Expenses").on("child_added",(snapshot)=>{
//     console.log(snapshot.key,snapshot.val());
// });




// database.ref("Expenses").push({
//     description:"club",
//     amount:899,
//     note:"",
//     createdat:1000
// });


// database.ref("Expenses").remove();

// database.ref().on("value",(snapshot)=>{
//     const val=snapshot.val();
//     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}.`);
// });


// const x=database.ref().on("value",(snapshot)=>{
//     console.log(snapshot.val());
// },(e)=>{
//     console.log("Error with data fetching",e);
// });

// setTimeout(()=>{
//     database.ref("age").set(85);
// },5000);

// setTimeout(()=>{
//     database.ref('name').off(x);
//     database.ref('age').set(24);
// },7000);

// setTimeout(()=>{
//     database.ref("age").set(63);
// },10000);




// database.ref().once('value')
// .then((snapshot)=>{
//     const val= snapshot.val();
//     console.log(val);
// })
// .catch((e)=>{
//     console.log("Error fetching data",e);
// });



// database.ref().set({
//     name:'ramin',
//     age: 23,
//     stressLevel:6,
//     job:{
//         title:"Software developer",
//         company:"Google"
//     },
//     location:{
//         city:"tehran",
//         country:"IRAN"
//     }
// }).then(()=>{
//     console.log("data is saved");
// }).catch((e)=>{
//     console.log("Failed this ",e)
// });

// database.ref().update({
//    stressLevel:9,
//    'job/company':"Amazon",
//    'location/city':"Seatle"
// })


// database.ref().set('This is my data');

// database.ref('age').set(25);
// database.ref("location/city").set('Urum');

// database.ref('attributes').set({
//     height:"180cm",
//     weigth:"80"
// }).then(()=>{
//     console.log('saved data');
// }).catch((e)=>{
//     console.log('Failed to save',e);    
// });

// console.log('I made a request to change the data');

// database.ref("isSingle").set(null);


// database.ref("isSingle").remove().then(()=>{
//     console.log("Removed seccessfully");
// }).catch((e)=>{
//     console.log('Failed to remove',e);
// });
