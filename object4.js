///


let tony={
    name :'dheeraj',
    lastName : 'kumar',
    friends : ['rrrrrrrrrrr','yyyyyyyyyyyyy','hhhhhhhhhhhhhhh'],
    age:23,
    isgood: true,
    abc:undefined,
    address:{
      state : "delhi",
      city:"delhi 86",



    },
    sayshi: function fn(){
        console.log('iron man is here ');
        return " end of this"
    }
}
// console.log(tony['name']);
// console.log(tony['sayshi']());

// // () this  means we call a function sayshi by ()

// console.log(tony['address']['city']);

// console.log(tony['friends']['1']);
// ///1 means 1 index of friends array

 let karr = Object.keys(tony);
 console.log(karr);


 //output
 //
//  [
//   'name',    'lastName',
//   'friends', 'age',
//   'isgood',  'abc',
//   'address', 'sayshi'
//                             ]