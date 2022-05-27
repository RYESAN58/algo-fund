// Given a numerical array, reverse the order of values, in-place. The reversed array should have the same length, with existing elements moved to other indices so that order of elements is reversed. Working 'in-place' means that you cannot use a second 
// array – move values within the array that you are given. As always, do not use built-in array functions such as splice().


// let arr = [5 , 10 , 44 , 1, -6]
//   let x = arr.length-1
//   for (let i = 0 ; i < (arr.length/2); i++){
//     arr[i] = [ arr[x-i], arr[x-i]= arr[i]][0]
//   }
// console.log(arr)


// Replicate JavaScript's concat(). Create a standalone function that accepts two arrays. Return a new array containing the first array's elements, followed by the second array's elements. Do not alter the original arrays. Ex.: arrConcat( ['a','b'], [1,2] ) should return new array ['a','b',1,2].

// let arr = [7,11,13,3,9]
// let mover = 2
// let temp = null


// const MoveBy = (array, moveBY ) => {
//   if (moveBY> 0){
//     for(let index = 0; index < moveBY; index++ ){
//       temp = array[arr.length-1]
//       for( let i = arr.length-1; i > -1; i--){
//         arr[i] = arr[i-1]
//       }
//       array[0] = temp
//     }
//   }else{
//   for(let index = 0; index > moveBY; index--){
//     temp = array[0]
//     for(let i = 0; i < array.length-1; i++){
//       array[i] = array[i+1] 
//     }
//     array[array.length-1] = temp
//   }
//   }
//   console.log(array)
// }

// MoveBy(arr, mover)



// Alan is good at breaking secret codes. One method is to eliminate values that lie outside of a specific known range. Given arr and values min and max, retain only the array values between min and max. Work in-place: return the array you are given, with values in original order. No built-in array functions.

let arr = [4,6,12,4,64]
let min = 5
let max = 8
function filterRange(arr, minVal, maxVal) {
  for (var i = 0; i < arr.length; i++) {
      if (arr[i] < minVal || arr[i] > maxVal) {
          for (var k = i+1; k < arr.length; k++) {
              arr[k-1] = arr[k];
          }
          arr.length--; 
          i--; 
      }
  }
}

// Replicate JavaScript's concat(). Create a standalone function that accepts two arrays. Return a new array containing the first array's elements, followed by the second array's elements. Do not alter the original arrays. Ex.: arrConcat( ['a','b'], [1,2] ) should return new array ['a','b',1,2].

function concatArrays(arr1, arr2) {
  var newArr = [];
  var curInd = 0; 
  for (var i = 0; i < arr1.length; i++) {
      newArr[curInd] = arr1[i];
      curInd++;
  }
  for (var i = 0; i < arr2.length; i++) {
      newArr[curInd] = arr2[i];
      curInd++;
  }
  return newArr;
}

