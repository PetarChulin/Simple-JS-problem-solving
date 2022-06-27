/*A boomerang is a V-shaped sequence that is either upright or upside down. 
Specifically, a boomerang can be defined as: sub-array of length 3, 
with the first and last digits being the same and the middle digit being different.
***********************************************************************************/

function countBoomerangs(arr) {
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        (arr[i] != arr[i + 1] && arr[i] == arr[i + 2]) ? count++ : null;
    }
    return count;
}
countBoomerangs([9, 5, 9, 5, 1, 1, 1]);
countBoomerangs([5, 6, 6, 7, 6, 3, 9]);