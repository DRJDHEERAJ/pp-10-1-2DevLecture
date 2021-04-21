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
for(let key in tony){
    console.log(tony[key]);
}
//output
//
// dheeraj
// kumar
// [ 'rrrrrrrrrrr', 'yyyyyyyyyyyyy', 'hhhhhhhhhhhhhhh' ]
// 23
// true
// undefined
// { state: 'delhi', city: 'delhi 86' }
// [Function: fn]