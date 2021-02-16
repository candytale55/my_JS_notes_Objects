//Destructured Assignment
/*
We often want to extract key-value pairs from objects and save them as variables. Take for example the following object:
*/

const vampire = {
  name: 'Dracula',
  residence: 'Transylvania',
  preferences: {
    day: 'stay inside',
    night: 'satisfy appetite'
  }
};

// If we wanted to extract the residence property as a variable, we could using the following code:

const residence1 = vampire.residence; 
console.log(residence1); // Prints 'Transylvania' 


/*
However, we can also take advantage of a destructuring technique called destructured assignment to save ourselves some keystrokes. In destructured assignment we create a variable with the name of an object’s key that is wrapped in curly braces { } and assign to it the object. Take a look at the example below:
*/

const { residence } = vampire; 
console.log(residence); // Prints 'Transylvania'

/*
Look back at the vampire object’s properties in the first code example. 
Then, in the example above, we declare a new variable residence that extracts the value of the residence property of vampire. 
When we log the value of residence to the console, 'Transylvania' is printed.
*/

const { day } = vampire.preferences; 
console.log(day); // Prints 'stay inside'

/*
Use destructured assignment to create a const variable named functionality that extracts the functionality property of robot.
*/


const robot = {
  model: '1E78V2',
  energyLevel: 100,
  functionality: {
    beep() {
      console.log('Beep Boop');
    },
    fireLaser() {
      console.log('Pew Pew');
    },
  }
};

const {functionality} = robot;
console.log(functionality);
/*
Since functionality is referencing robot.functionality we can call the methods available to robot.functionality simply through functionality.

Take advantage of this shortcut and call the .beep() method on functionality.
*/
functionality.beep();
