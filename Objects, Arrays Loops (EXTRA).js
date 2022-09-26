// Additional assignments for Day 8

/* EXTRA 1
 Write a piece of code for reverting an array.
 es:
 [1, 3, 5] ==> [5, 3, 1]
*/

/* WRITE YOUR ANSWER HERE */
let myArray = [1, 3, 5];
myArray = myArray.reverse();
console.log(myArray);
/* EXTRA 2
 Write a piece of code for getting the maximum numerical value from an array.
*/

/* WRITE YOUR ANSWER HERE */
let max = Math.max(...myArray);
console.log(max);
/* EXTRA 3
 Write a piece of code for getting the minimum numerical value from an array.
*/

/* WRITE YOUR ANSWER HERE */
let min = Math.min(...myArray);
console.log(min);
/* EXTRA 4
 Write a piece of code for getting only even numerical values from an array.
*/

/* WRITE YOUR ANSWER HERE */
let mixedArray = [14, "giovanni", 33, 21, "lidia", 17, "miamamma"];
let onlyNumValue = [];
for (i = 0; i < mixedArray.length; i++) {
  if (mixedArray[i] === Number) {
    onlyNumValue.push(mixedArray[i]);
  }
  console.log(onlyNumValue);
}
/* EXTRA 5
 Write a piece of code for deleting only even entries from an array.
*/

/* WRITE YOUR ANSWER HERE */

/* EXTRA 6
 Write a piece of code for removing all the vowels from a string.
*/

/* WRITE YOUR ANSWER HERE */

/* EXTRA 7
 Write a piece of code for increasing all the numerical values in a array by 1.
*/

/* WRITE YOUR ANSWER HERE */

/* EXTRA 8 
 Replace all the strings contained in an array with their length.
 es.: ["strive", "is", "great"] => [6, 2, 5]
*/

/* WRITE YOUR ANSWER HERE */
