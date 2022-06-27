/*A number is Oddish if the sum of all of its digits is odd, 
and a number is Evenish if the sum of all of its digits is even.
 If a number is Oddish, return "Oddish". Otherwise, return "Evenish".*/
// ******************************************************************
function oddishOrEvenish(num) {
     
    return String(num).split('').map(d => Number(d)).reduce((a, b) => a + b) % 2 == 1 ? 'Oddish' : 'Evenish';
    
}
oddishOrEvenish(43);
oddishOrEvenish(4433);