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
const studentsArray = [{"name":'Sami',"location":'SW Denver'}, {"name":'Jake', location:'NW Denver'}];
// A list of student names from our class, each with a location and each with a list of favorite tv shows.
const studentsObj = {
  Sami: { "location":'SW Denver', "tvShows": 'The Good Place'},
  Jake: {"location":'NW Denver', "tvShows": 'The Expanse'},
};

// 2. Take it Easy
// - Make an array that holds all of the colors of the rainbow.
const rainbowArr = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
// - Write code that will access "blue" from the rainbow array.
console.log(rainbowArr[4]);
// - Make an object that is called your name and holds the information about your favorite food, a hobby, the name of the town that you live in currently, and your favorite datatype.
const Jake = {
  "favFood":'tacos',
  "hobby": 'guitar',
  "location": 'Denver',
  "favDataType": 'objects',
};
// - Write code that will access your hobby from the object that you just created.
console.log(Jake.hobby);

// 3. Crazy Object!
const crazyObject = {
  taco: [
    {
      meat: 'steak',
      cheese: ['panela', 'queso', 'chihuahua'],
    },
    {
      meat: 'chicken',
      salsa: ["pico", "hot", "hotter", "really hot", "really really hot", "omg my mouth is burning"],
    },
  ],
  larry: {
    nicknames: ["LD", "Chicken Teriyaki Boyyyyyy"],
    quotes: ["Pretty pretty prettayyyyy good", "Is that a parkinson's thing?", "women love a self confident bald man", "I'm a walking talking enigma"],
    characters: [
      {
        name: "Jeff",
        occupation: "manager"
      },
      {
        name: "funkhauser",
        occupation: "tv dude"
      },
      {
        name: "susie",
        occupation: "jeffs wife",
        favourtieHobby: "Swearing at Larry and Jeff"
      },
    ],
  },
};
// Use crazyObject to log the following.
// - "omg my mouth is burning"
console.log(crazyObject.taco[1].salsa[5]);
// - "Pretty pretty prettayyyyy good"
console.log(crazyObject.larry.quotes[0]);
// - "Swearing at Larry and Jeff"
console.log(crazyObject.larry.characters[2].favourtieHobby);
// - "Chicken Teriyaki Boyyyyyy"
console.log(crazyObject.larry.nicknames[1]);
// - The object the contains the name funkhauser
console.log(crazyObject.larry.characters[1]);

// 4. Object-ception
// With the following object:
const inception = {
   reality: {
       dreamLayer1: {
           dreamLayer2: {
               dreamLayer3: {
                   dreamLayer4: {
                       dreamLayer5: {
                           dreamLayer6: {
                               limbo: "Joseph Gordon Levitt",
                          },
                       },
                   },
               },
           },
       },
   },
};
// Change the value of limbo to null
inception.reality.dreamLayer1.dreamLayer2.dreamLayer3.dreamLayer4.dreamLayer5.dreamLayer6.limbo = null;
console.log(inception.reality.dreamLayer1.dreamLayer2.dreamLayer3.dreamLayer4.dreamLayer5.dreamLayer6.limbo);

