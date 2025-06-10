// Given an array and chunk size, divide the array into  
// many subarrays where each subarray is of length size.

function chunk(array, size){
    if (size > array.length){
        return [array];
    }
  let result = [];
  let index = 0;
  while (index < array.length){
    result.push(array.slice(index, index + size));
    index += size;
    }

    return result;
}

console.log(chunk([23,45,67,89], 2));
console.log(chunk([23,45,67,89,99,76,543,234,6,5,90,87,65,43,23,67], 4));
console.log(chunk([23,45,67,89,90,456,78], 3));
console.log(chunk([23,45,7,9,5], 7));