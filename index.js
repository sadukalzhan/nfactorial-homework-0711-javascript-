
// function checkAge(age){
// age > 18 ? true:confirm('Родители разрешили?');
// }

// checkAge(18)


// function pow(x, n){
// return x ** n;
// }

// console.log(pow(3,2)); // 9




//   let ask = (question, yes, no) => {
//     confirm(question) ? yes():no();
//   }
  
//   ask(
//     "Вы согласны?",
//     () => { alert("Вы согласились."); },
//     () => { alert("Вы отменили выполнение."); }
//   );


    //  let arr = [5, 2, 1, -10, 8];
    //  arr.sort((a,b) => b-a)
    //  alert( arr ); // 8, 5, 2, 1, -10


//     let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };

// let users = [ vasya, petya, masha ];

// let names = users.map((item) => {return item.name});
// alert( names ); // Вася, Петя, Маша




let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr = [ vasya, petya, masha ];

let getAverageAge = (item) =>{
    let total = 0;
  for(let i = 0; i < item.length; i++){
      total += item[i].age
  }
  return total/item.length
}

alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28







