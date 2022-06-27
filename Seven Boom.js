// Create a function that takes an array of numbers and return "Boom!" if the digit 7 appears in the array. 
// Otherwise, return "there is no 7 in the array".
// **************************************************
function sevenBoom(arr) {
    let array = [];
    arr.forEach(e => e.toString().length > 1 ? array.push(e.toString().split('')) : array.push(e.toString()));

    let newArr = array.flat();   
    return newArr.find(e => e == '7') ? 'Boom!' : 'there is no 7 in the array';
}

sevenBoom([1, 2, 3, 4, 5, 6, 7]);
sevenBoom([8, 6, 33, 100]);
sevenBoom([2, 55, 60, 97, 86]);