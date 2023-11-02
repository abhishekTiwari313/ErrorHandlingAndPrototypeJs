//problem1.
function doubleArrayWithCallback(arr, callback) {
    if (typeof callback !== 'function') {
      throw new Error('Callback must be a function');
    }
  
    if (!Array.isArray(arr)) {
      throw new Error('Input must be an array');
    }
  
    const doubledArray = [];
    for (let i = 0; i < arr.length; i++) {
      if (Number.isInteger(arr[i])) {
        doubledArray.push(callback(arr[i] * 2));
      } else {
        throw new Error('Input array must contain only integers');
      }
    }
  
    return doubledArray;
  }
  
  // Example usage:
  const inputArray = [1, 2, 3, 4, 5];
  const callbackFunction = (num) => num + 10; // Example callback function
  const doubledArray = doubleArrayWithCallback(inputArray, callbackFunction);
  console.log(doubledArray); // Output: [12, 14, 16, 18, 20]

  
  //problem2
  function manipulateString(inputString) {
    // Convert the input string to uppercase
    const manipulatedString = inputString.toUpperCase();
  
    // Define the logString callback function
    function logString() {
      console.log(`The manipulated string is: ${manipulatedString}`);
    }
  
    // Return the logString callback function
    return logString;
  }
  
  // Example usage:
  const originalString = "Hello, World!";
  const logManipulatedString = manipulateString(originalString);
  logManipulatedString(); // Logs: "The manipulated string is: HELLO, WORLD!"

  
  //problem3

  function ageInDays(person) {
    // Concatenate the first name and last name into a full name
    const fullName = `${person.firstName} ${person.lastName}`;
  
    // Calculate the age in days
    const ageInDays = person.age * 365; // Assuming 365 days in a year
  
    // Define the logMessage callback function
    function logMessage() {
      console.log(`The person's full name is ${fullName} and their age in days is ${ageInDays}.`);
    }
  
    // Return the logMessage callback function
    return logMessage;
  }
  
  // Example usage:
  const personInfo = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
  };
  
  const logAgeMessage = ageInDays(personInfo);
  logAgeMessage(); // Logs: "The person's full name is John Doe and their age in days is 10950."

  //problem4
  function logBookTitlesInAlphabeticalOrder(books, callback) {
    // Use the map function to extract book titles
    const bookTitles = books.map((book) => book.title);
  
    // Sort the book titles in alphabetical order
    bookTitles.sort();
  
    // Call the callback function with the sorted book titles
    callback(bookTitles);
  }
  
  // Example usage:
  const books = [
    { title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951 },
    { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
    { title: "1984", author: "George Orwell", year: 1949 },
  ];
  
  function logTitlesCallback(titles) {
    console.log("Book titles in alphabetical order:");
    titles.forEach((title) => console.log(title));
  }
  
  logBookTitlesInAlphabeticalOrder(books, logTitlesCallback);

  //problem5
  function greetWithPromise(name) {
    return new Promise((resolve, reject) => {
      if (typeof name === 'string') {
        const greeting = `Hello, ${name}!`;
        resolve(greeting);
      } else {
        reject(new Error('Name must be a string'));
      }
    });
  }
  
  // Example usage:
  const name = "Mithun";
  greetWithPromise(name)
    .then((greeting) => {
      console.log(greeting); // Logs: "Hello, Mithun!"
    })
    .catch((error) => {
      console.error(error.message);
    });
  
  
  
