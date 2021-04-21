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
let karr = Object.keys(tony);
console.log(karr);
  //only print strings which is present in object 

for(let i = 0; i< karr.length; i++){
  //  let key = karr[i];

  console.log(tony[karr[i]]);
    //print all values of given string in object
}
 //output
//  [
//     'name',    'lastName',
//     'friends', 'age',
//     'isgood',  'abc',
//     'address', 'sayshi'
//   ]                                      ///string

//   dheeraj
//   kumar
//   [ 'rrrrrrrrrrr', 'yyyyyyyyyyyyy', 'hhhhhhhhhhhhhhh' ]
//   23
//   true
//   undefined
//   { state: 'delhi', city: 'delhi 86' }
//   [Function: fn]                                                   /////////print values of string