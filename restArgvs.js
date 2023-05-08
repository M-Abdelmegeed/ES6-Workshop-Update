function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3)); // Output: 6
console.log(sum(4, 5, 6, 7)); // Output: 22
console.log(sum(10)); // Output: 10
console.log(sum()); // Output: 0

// In this example, we define a sum function that uses rest parameters ...numbers to allow for an arbitrary number of arguments to be passed in.
// We then use the reduce method to sum up all of the numbers passed in and return the total.

// We then test the sum function with various arguments, including an empty argument list, to ensure it works as expected.

// Rest parameters in ES6 allow us to pass in an arbitrary number of arguments to a function as an array.
// We can then use array methods like reduce to perform operations on the arguments.
// Rest parameters can also be used in combination with other parameters in a function signature, but they must always be the last parameter.
