let name = 'I;AM;IRON;MAN';
//SPLIT
let strarray= name.split(';');
console.log(strarray);
let biggest = 0;
for(let i=0; i<strarray.length;i++){
    if(strarray[i].length>biggest){

        biggest = strarray[i].length;    
    }
}
console.log(biggest);