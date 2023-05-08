const validate = {
  email: (input) => {
    const regex = /\S+@\S+\.\S+/;
    return regex.test(input);
  },
  password: (input) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{8,}$/;
    return regex.test(input);
  },
  phoneNumber: (input) => {
    const regex = /^(01)[0125]\d{8}$/;
    return regex.test(input);
  },
};

console.log(validate.email("test@example.com")); // Output: true
console.log(validate.email("invalid email")); // Output: false

console.log(validate.password("password")); // Output: false
console.log(validate.password("Passw0rd$")); // Output: true

console.log(validate.phoneNumber("01001234567")); // Output: true
console.log(validate.phoneNumber("0123456789")); // Output: false

// In this example, the regular expression for email validation checks if the input string contains one or more non-whitespace characters,
// followed by an "@" symbol, followed by one or more non-whitespace characters, followed by a dot ".",
//followed by one or more non-whitespace characters.

// The regular expression for password validation checks if the input string contains at least one lowercase letter,
// one uppercase letter, and one digit, and is at least eight characters long. The password can also contain any of the characters @$!%*?&.

// The regular expression for phone number validation checks if the input string starts with "01",
//followed by one of the digits "0", "1", "2", or "5", and is followed by eight digits.
// This validates Egyptian phone numbers to be precise, you could check the formatting of Egyptian numbers online.
