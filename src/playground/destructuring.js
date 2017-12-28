// console.log("a");
// const person={
//     name:"Ramin",
//     age:23,
//     location:{
//         city:"Tehran",
//         temp:"10"
//     }
// };
// const {name:r="an",age,location}=person;
// const {city,temp:a}=location;
// console.log(`${r} is ${age} and ${city} and ${a}`);
// const book={
//     name:"ego",
//     publisher:{
//         // name:"panguin"
//     }
// };

// const{name:book1="self-published"}=book.publisher;
// if(book1)
// console.log(book1);


 //Array destructring:

 const item=["coffee(hot)","$2.00",,"$2.90"];
 const [type,,cost="$3"]=item;
 console.log(`A medium ${type} costs ${cost}`);

