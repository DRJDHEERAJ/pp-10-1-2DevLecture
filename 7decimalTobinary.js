let decimal = 26;
function dtb(decimal){
    let binary = 0;
    let pv = 1;
    while(decimal>0){
        console.log(decimal);         // print the quotient
        let rem = decimal%2;  
        binary = binary+ rem*pv;
        pv = pv*10;  //change the place value by 10^1, 10^2, 10^3   
        decimal = Math.floor(decimal/2);     // use this because of avoid (6.5,6.1,.......) take only 6
    }
    return binary;
}
let ans = dtb(decimal);
console.log(ans,'is binary of',decimal,'decimal number');