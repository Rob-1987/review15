// This is a function called lastBigNumber that is looping through an array of numbers to find the last biggest number that is bigger than ten in that array. This function will be read by the computer from top to bottom one line at a time.


function lastBigNumber(numbers) { //This is the start of the function where the function is given it's name lastBigNumber. The name is a parameter in coding terms.
  let lastBiggerThanTen = null; //After reading the first line the function will then read this line where it is given a varible name of lastBiggerThanTen which is set to null.
  for (let i = 0; i < numbers.length; i++) { //Then moving to this line it is assigning (i) to zero and say to loop through the array of numbers that will be given to the function.
    if (numbers[i] > 10) {// If the current number[i] is bigger than 10 then move to the next line.
      lastBiggerThanTen = numbers[i];//This line is saying that if the last bigger than ten number equals number[i] then move to the next line and continue with the function and give a return.
    }
  }
  return lastBiggerThanTen;// This line is saying to return the lastBiggerThanTen number that has been found.
}



//These are six test cases below that all return the last biggest number in the array of number that are attached to the console.log.


console.log(lastBigNumber([5, 7, 15, 20, 3, 100, 19,]));//Test case that is returning 100
console.log(lastBigNumber([15, 17, 115, 20, 3, 100, 1119,]));//Test case that is returning 1119
console.log(lastBigNumber([1115, 7, 15, 200, 3, 100, 190,]));//Test case that is returning 1115
console.log(lastBigNumber([5, 70, 15, 2000, 30, 100, 19,]));//Test case that is returning 2000
console.log(lastBigNumber([57, 7, 159, 20, 300, 100, 19,]));//Test case that is returning 300
console.log(lastBigNumber([80, 75, 15, 2055, 3, 10000, 1900,]));//Test case that is returning 10000