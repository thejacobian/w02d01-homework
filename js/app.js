console.log('Up and running');

//  1. Data types
// Suppose you are tasked with creating some software, and it is up to you to determine which datatypes and what data structure to use. For each of the following, write which data types you would use to represent the data, and then give a small example of the data structure:
// A light switch that can be either on or off.
// I would use a Boolean for the status of a light switch because its either on or off. let lightSwitchOn = true;
// A user's email address.
// I would use a String because it is made of a bunch of characters and not just numbers and can be iterated later easily (ex: jake@gmail.com)
// A spaceship with a hull, laser blasters, tractor beam, and warp drive.
// I would use an Object because the SpaceShip has various properties that I want to keep track of in key-value pairs:
const spaceship = {
  "hull": 0.95, //95% undamaged
  "laser blasters": true,
  "tractor beam": false,
  "warp drive": true,
};
// A list of student names from our class.
// I would use an array of strings for the student names because they are one consistent type a name.
const studentNames = ['Sami', 'Jake', 'Veda', 'David', 'Thomas'];
// A list of student names from our class, each with a location.
// I would use an array of objects for this because we want to keep track of two related things a property of a student and the student.
const studentArray = [{"name":'Sami',"location":'SW Denver'}, {"name":'Jake', location:'NW Denver'}];
// A list of student names from our class, each with a location and each with a list of favorite tv shows.
const studentsObj = {
  Sami: { "location":'SW Denver', "tvShows": 'The Good Place'}, 
  Jake: {"location":'NW Denver', "tvShows": 'The Expanse'},
};

// 2. Take it Easy
// - Make an array that holds all of the colors of the rainbow.
// - Write code that will access "blue" from the rainbow array.
// - Make an object that is called your name and holds the information about your favorite food, a hobby, the name of the town that you live in currently, and your favorite datatype.
// - Write code that will access your hobby from the object that you just created.