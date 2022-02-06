'use strict'
//white board solution
//input: one diminsional array
//output: one dimoinsional array reveresed

//edge cases: 1) array is empty. 2) null or undefined. 
//visual : start at the end of the array and copy the element in a new array and do the same from the end to the first element;
const arrayReverse=(array)=>{
  if(!array){return []}
  let testArray=[];
  for (let i=0;i<array.length;i++){
    testArray.push(array[array.length-i-1])
  }
return testArray;
}



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