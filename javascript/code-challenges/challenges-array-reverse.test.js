'use strict'
//white board solution
//input: one diminsional array
//output: one dimoinsional array reveresed

//edge cases: 1) array is empty. 2) null or undefined. 
//visual : start at the end of the array and copy the element in a new array and do the same from the end to the first element;

//big O ?
//time complexity O(n)
// space complexity O(n)

// Algorithm 
//create a function that accepts an array
//check if the array is empty, and return an empty array if it is
// iterate the array starting with the last index
// push the elemnt into an empty array.
// return the new array 
const arrayReverse=(array)=>{
  if(!array){return []}
  let testArray=[];
  for (let i=0;i<array.length;i++){
    testArray.push(array[array.length-i-1])
  }
return testArray;
}
// if want to make a copy of an array, you just use the "..." inside brackets
const arr = [1,2,3,4]
const reverse = (array)=>{
  const arr2 = [...arr];
  return  arr2.reverse();
}
console.log(reverse(arr))
console.log(arr)

console.log(arrayReverse([1,2,3]));
console.log(arrayReverse([]));
console.log(arrayReverse([1]));








// testing

describe('reversing an array',()=>{
  it('should reverse an array',()=>{
    expect(arrayReverse([1,2,3])).toEqual([3,2,1]);
  });

  it('should return an empty array if the accepted array is empty',()=>{
    expect(arrayReverse([])).toEqual([]);
  })
})