//finding largest and smallest value in array

let a = [2,3,4,5,6,7,8,9];
//positive elements
//less than 1000
function las(arr)
{
    let largest = -1;
    let smallest = 1000;
    for(let i = 0; i<arr.length; i++)
    {
        if(arr[i]>largest)
        {
            largest = arr[i];
        }
        if(arr[i]<smallest)
        {
            smallest = arr[i];
        }

    }
    console.log(smallest+"  "+largest);
    return([smallest,largest]);

}
let rval = las(a);
console.log(rval);