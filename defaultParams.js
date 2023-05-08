const createFullName = (
  firstName = "John",
  middleName = "",
  lastName = "Doe"
) => {
  return `${firstName} ${middleName} ${lastName}`.trim();
};

console.log(createFullName()); // Output: "John Doe"
console.log(createFullName("Alice", "Marie", "Smith")); // Output: "Alice Marie Smith"
console.log(createFullName("Bob", "", "Johnson")); // Output: "Bob Johnson"
