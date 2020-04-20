// Check if an Object has a Property

//  1. Using the hasOwnProperty() method
//  2. Using "in"

let animals = {
  lion : {
    eats: "meat",
    vertebrate: true,
    type: "mammal",
  }, 
  horse :{
    eats: "grass",
    vertebrate: true,
    type: "mammal",
    hasHooves: true,
  },
  ladybug : {
    eats: "other bugs",
    vertebrate: false,
    type: "insect",
    canFly: true,
  },
};

//  1. Using the hasOwnProperty() method
animals.hasOwnProperty("ladybug"); // true
animals.hasOwnProperty("rhino");   // false
animals.ladybug.hasOwnProperty("type"); // true


// 2. Using "in"
"ladybug" in animals; // true
"rhino" in animals; // false
"type" in animals.ladybug; // true

//Verification:
console.log("Using hasOwnProperty()");
console.log(animals.hasOwnProperty("ladybug"));
console.log(animals.hasOwnProperty("rhino"));
console.log(animals.ladybug.hasOwnProperty("type"));

console.log("Using \"in\"");
console.log("ladybug" in animals);
console.log("rhino" in animals);
console.log("type" in animals.ladybug);