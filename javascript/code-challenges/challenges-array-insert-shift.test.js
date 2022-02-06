




const insertShiftArray = (array,element)=>{
  const middleIndex = Math.floor((array.length-1)/2);
  console.log(middleIndex)
  const arrayTemp = [];
  for (let i = 0; i <= middleIndex; i++){
    arrayTemp.push(array[i]);
  }
  arrayTemp.push(element);
  for (let i = middleIndex+1; i < array.length; i++){
    arrayTemp.push(array[i]);
  }
return arrayTemp;
}
console.log(insertShiftArray([1,2,3,4,5],4))



const deleteShiftArray = (array)=>{
  const middleIndex = Math.floor((array.length-1)/2);
  console.log(middleIndex)
  const arrayTemp = [];
  for (let i = 0; i < middleIndex; i++){
    arrayTemp.push(array[i]);
  }
  for (let i = middleIndex+1; i < array.length; i++){
    arrayTemp.push(array[i]);
  }
return arrayTemp;
}
console.log(deleteShiftArray([1,2,4,5]));












//test


describe('adding an element at index',()=>{
  it('should add an element after the middle index',()=>{
    expect(insertShiftArray([2,4,6,-8], 5)).toEqual([2,4,5,6,-8]);
  })
  it('should add an element after the middle index',()=>{
      expect(insertShiftArray([], 5)).toEqual([5]);
    })

})

describe('delete the element in the middle index',()=>{
  it('should delete an element from the middle index',()=>{
    expect(deleteShiftArray([1,3,5])).toEqual([1,5]);
  })
})