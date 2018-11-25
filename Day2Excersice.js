/**
This problem was asked by Uber.
Given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i.
For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24]. If our input was [3, 2, 1], the expected output would be [2, 3, 6].
Follow-up: what if you can't use division
 */

 let arreglo = [1,2,3,4,5];

//  Without division
 let res = arreglo.map(element =>{
    let auxArr = arreglo.slice();
    auxArr.splice(auxArr.indexOf(element),1)
    return auxArr.reduce((acc,curr)=>acc*curr);
 });

//  With division
let total = arreglo.reduce((acc,curr)=>acc*curr);
let res1 = arreglo.map(element => {
    return total/element;
})
 
 console.log(res)
 console.log(res1)