'use strict'

const array = [1,0,1];

const binartToNumber = (array)=>{
  let number = 0;
  for (let i = 0; i<array.length; i++){
    number=number+2^array[array.length-1-i];

  }
  return number;
}

array =[1,2,3,4,6]
const array2 = [1,4,3,2,6]

const missingNumber= (array)=>{
  const sum = 16;
  const originalSum = (array.length+1)*(2+array.length)/2;
  const missingNumber = originalSum-sum;
  return sum;
}
Array = [4,3,2,9,7,8] => output = [9,4,7,3,8,2]
N = 3



const Arranging = (array)=>{
  let N = array.length/2;
  let testArray=[];

  for (let i = 0;i<N;i++){

    testArray.push(array[N+i]);
    testArray.push(array[i]);
  }
  return testArray;
}



const sumArray = (array)=>{
  let testArray = [];
  let minorSum = 0;
  let value = 0;
  for (let i = 0; i<array.length ; i++){
    value = array[i];
    if(value ===array[i+1]){
      minorSum =value+array[i+1]
    }else{
      testArray.push(minorSum);
      minorSum=0
    }
  
  }
}









