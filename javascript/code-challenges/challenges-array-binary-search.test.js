"use strict";
//problem domain
// i should use binary search to find an element in an array
// if elemnt is not found , return -1
//input >>>an array and a search key
//output>>> nmuber

//algorithem
// 1) declare a function that accepts an array and a search key
// 2) declare declare a mid left and right variables .
// 3) while left > right we run a function
// 4) if the search key is more than mid change the value of left to mid +1
// 5) if the serach ky is less than mid change the value of right to mid -1;
// 6) return the index or -1;

const binarySearchRecursive = (array, searchKey )=> {
  let left = 0;
  let right = array.length-1;
  while(left<=right){ 
  let mid = Math.floor((right+left)/2) ;
    console.log(left,mid,array[mid],right,searchKey)
  if (array[mid] == searchKey) {
    return mid;
  } else if (searchKey < array[mid]) {
    right = mid-1;
  } else {
    left = mid+1 ;
  }
  console.log('left',left,'right',right);
}
return -1;
};
console.log(binarySearchRecursive([1, 2, 3, 4, 5, 6],3.5));

//tests

describe("binary search", () => {
  it("Should use binary search to find The index of Element in an array", () => {
    expect(binarySearchRecursive([1, 2, 3, 4, 5], 3)).toEqual(2);
  });
  it("should return -1 if the element is not found", () => {
    expect(binarySearchRecursive([1, 2, 3, 4, 5], 7)).toEqual(-1);
  });
});
