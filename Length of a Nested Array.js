/*Find the total number of non-nested items in the nested array. 
In the above case, [1, [2, 3]] contains 3 non-nested items, 1, 2 and 3.
Write a function that returns the total number of non-nested items in a nested array.*/

const getLength = array => array.flat(Infinity).length;

getLength([1, [2, 3]]);
getLength([1, [2, [3, 4]]]);
getLength([1, [2, [3, [4, [5, 6]]]]]);
getLength([1, [2], 1, [2], 1]);