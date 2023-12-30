/**
 * A variable declared using var is accessible throughout the function in which it is declared, 
 * but a variable declared by let is only accessible inside the block in which it is defined.
 * const is used to declare constants, which are variables that cannot be reassigned new values.
 */
  

// Using let
if (true) {
    let x = 10;
    console.log("Inside 'let' block: ", x); // Output: 10
  }
  // Uncommenting the line below would result in an error, as 'x' is not defined here.
  // console.log("Outside 'let' block: ", x);
  
  // Using const
  const y = 20;
  console.log("Using 'const': ", y); // Output: 20
  // Uncommenting the line below would result in an error, as 'y' cannot be reassigned.
  // y = 30;
  
  // Using var
  if (true) {
    var z = 30;
    console.log("Inside 'var' block: ", z); // Output: 30
  }
  console.log("Outside 'var' block: ", z); // Output: 30
  