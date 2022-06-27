// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.

describe("descriptiveArr", () => {
  it("returns a takes in an array of objects and returns an array with a sentence about each person with their name capitalized.", () => {
    const people = [
      { name: "ford prefect", occupation: "a hitchhiker" },
      { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
      { name: "arthur dent", occupation: "a radio employee" }]
      // Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]
    expect(descriptiveArr(people)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."])
  })
})

//Got RED
// FAIL  ./code-challenges.test.js
//   descriptiveArr
//     ✕ returns a takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

//   ● descriptiveArr › returns a takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

//     ReferenceError: descriptiveArr is not defined

// b) Create the function that makes the test pass.
//create a function called descriptiveArr
//descriptiveArr takes in an array of objects (objArr) as an input
  //have to access the array and iterate over it.
  //have to manipulate the value in the name key. The occupation key just needs the value to be returned.
  //to access data in an array use bracket notation []. to access data in an object use dot notation (.name)
    //values in the name key have to be  capitalized
  //store the values from objArr that have been manipulated/returned in a new array.
  //return that array
//the expected output is an array with a descriptive sentence about each person in the objArr with their name capitalized.
//to iterate over the objArr: forLoop, .map, .forEach
  //.toUpperCase() method converts a string to have uppercase letters. It doesn't change the original string

// const descriptiveArr = (objArr) => {
//   const newArr = []
//   objArr.map(value => newArr.push(value.name.toUpperCase() + value.occupation))
//   return newArr
// }
//first output:
// +   "FORD PREFECTa hitchhiker",
// +   "ZAPHOD BEEBLEBROXpresident of the galaxy",
// +   "ARTHUR DENTa radio employee",
//this is working as intended. The key name and occupation are being access in the array. They name is being manipulated and the occupation is being added to the end. To fix the output as expected I should refactor to only uppercase the first letters. 
  //Uppercase first letters:
    //.split() splits a string into an array of substrings. 
      //so split the name capitalize index 0
        //index 0 can be accessed with a slice() method
    //.join() combines an array back into a string.

// const descriptiveArr = (objArr) => {
//   const newArr = []
//   objArr.map(value => newArr.push(value.name.split(" ").slice(0,1).toUpperCase().join() + value.occupation))
//   return newArr
// } - This gave me type error. The issue is split makes an array, and i was trying to slice the string in the array but instead slicing the array. if I split the name values into an array, I can then map over it again and target the first letter.



// const descriptiveArr = (objArr) => {
//   const newArr = []
//   objArr.map(value => newArr.push(value.name.split(" ").map(value=> value[0].toUpperCase() + value.slice(1)).join(" ") + " is " + value.occupation + "."))
//   return newArr
// } This passed but afterwords I am thinking I could make it simpler by using string interpolation

//i found naming conventions in the parameters a little tough to follow so i changed them to be easier to read
//created the function that takes in objArr
const descriptiveArr = (objArr) => {
  //created a variable the stores the new array
    //iterate over objArr. for each object do
  newArr = objArr.map(object => {
    //return each object in a string interpolation with the value(name) being manipulated and the occupation.
    return `${object.name.split(" ").map(value => value[0].toUpperCase().concat(value.slice(1))).join(" ")} is ${object.occupation}.`
  })
  return newArr 
}

//Got GREEN
// PASS  ./code-challenges.test.js
// descriptiveArr
//   ✓ returns a takes in an array of objects and returns an array with a sentence about each person with their name capitalized. (1 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total

// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.



describe("remainderArr", () => {
  it("takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3. a string that says hi", () => {
    const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
    // Expected output: [ 2, 0, -1, 0 ]
    const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
    // Expected output: [ 2, 1, -1 ]
    expect(remainderArr(hodgepodge1)).toEqual([ 2, 0, -1, 0 ])
    expect(remainderArr(hodgepodge2)).toEqual([ 2, 1, -1 ])
  })
})

//Got RED
// FAIL  ./code-challenges.test.js
//   descriptiveArr
//     ✓ returns a takes in an array of objects and returns an array with a sentence about each person with their name capitalized. (1 ms)
//   remainderArr
//     ✕ takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3. a string that says hi

//   ● remainderArr › takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3. a string that says hi

//     ReferenceError: remainderArr is not defined

// b) Create the function that makes the test pass.
//Create a function called remainderArr
//the function takes in a mixed data array (mixArr) as an input
//the expected output is an array with only the remainders of numbers when divided by 3
//first I would have to iterate over the array and identify number data type
  //.filter() iterates and returns a subset of an array
  //typeof can be used to specify number
  // modulo can be used to divide by a number, and return any of the remainder

// const remainderArr = (mixArr) => {
//   mixArr.filter(value => {
//     typeof value === 'number'
//     return value % 3
//   })
// }
//This was my first attempt. I always have trouble figuring out how to write the conditional for .filter() method. in my mind I am reading it as if the typeof value being filtered is a number return that value % 3, but I get undefined.
//I will try to rewrite it as a .map() method
  //have to push the value if it is a number into a new array
    //push the value % 3

 const remainderArr = (mixArr) => {
  const newArr =[]
  mixArr.map(value => {
    if(typeof value === 'number'){
      newArr.push(value%3)
    }
  })
  return newArr
 }

//Got GREEN
// PASS  ./code-challenges.test.js
//   descriptiveArr
//     ✓ returns a takes in an array of objects and returns an array with a sentence about each person with their name capitalized. (1 ms)
//   remainderArr
//     ✓ takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3. a string that says hi

// Test Suites: 1 passed, 1 total
// Tests:       2 passed, 2 total

// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.


describe("sumCubeArr", () => {
  it("takes in an array of numbers and returns the sum of all the numbers cubed.", () => {
  const cubeAndSum1 = [2, 3, 4]
  // Expected output: 99
  const cubeAndSum2 = [0, 5, 10]
  // Expected output: 1125
    expect(sumCubeArr(cubeAndSum1)).toEqual(99)
    expect(sumCubeArr(cubeAndSum2)).toEqual(1125)
  })
})

//Got RED
// FAIL  ./code-challenges.test.js
//   descriptiveArr
//     ✓ returns a takes in an array of objects and returns an array with a sentence about each person with their name capitalized. (1 ms)
//   remainderArr
//     ✓ takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3. a string that says hi
//   arrCubed
//     ✕ takes in an array of numbers and returns the sum of all the numbers cubed.

//   ● arrCubed › takes in an array of numbers and returns the sum of all the numbers cubed.

//     ReferenceError: arrCubed is not defined

// b) Create the function that makes the test pass.
//create a function called arrCubed
//it takes in an array of numbers(numArr) as an input
  //iterate over the array
    //forEach()? take each value and cube it
    //then add all the values in the array together
    //return the sum
//expected output is all numbers cubed then added together (2**3 + 3**3 + 4**4)= 99

const sumCubeArr= (numArr) => {
  newArr = numArr.map(value => value ** 3)
  return newArr.reduce((a, b) => a + b, 0)//I found reduce method online. it iterates through the array, stores each value and then adds the next value to the previous one, returning only a number.
} 

//Got GREEN
// PASS  ./code-challenges.test.js
//   descriptiveArr
//     ✓ returns a takes in an array of objects and returns an array with a sentence about each person with their name capitalized. (1 ms)
//   remainderArr
//     ✓ takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3. a string that says hi (1 ms)
//   sumCubeArr
//     ✓ takes in an array of numbers and returns the sum of all the numbers cubed.

// Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total
