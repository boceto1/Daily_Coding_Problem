/* This problem was asked by Stripe.
Given an array of integers, find the first missing positive integer in linear time and constant space. 
In other words, find the lowest positive integer that does not exist in the array. 
The array can contain duplicates and negative numbers as well.
For example, the input [3, 4, -1, 1] should give 2. The input [1, 2, 0] should give 3.
You can modify the input array in-place.
 */


// My solution

let arreglo = [2,3,-7,6,8,1,-10,15];
let value = 0;
let max = Math.max(...arreglo);

// If all elements are negative.
if(max<0) max=0;

let positiveArray = arreglo.filter(elemento => elemento>=0);
let positiveSortArray = positiveArray.sort((a,b)=> a-b);

 for (let index = 0; index < max; index++) {
    value = index+1;
    if(value!==positiveSortArray[index]){
        break;
    }
} 

value===0 ? console.log(max+1) : console.log(value);

// Solution Geeks for Geeks.

