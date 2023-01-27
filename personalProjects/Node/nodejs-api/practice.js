const name = process.argv[2];
console.log(process.argv);
const location = process.argv[3];
console.log(`Hi, I'm ${name}! I live in ${location}`);


console.log("process.env:", process.env);
console.log("process.env.NODE_ENV: ", process.env.NODE_ENV);
console.log("process.env.PORT: ", process.env.PORT);

// destructuring objects

const animal = {
  type: "vertebrate",
  Class: "mammal",
  name: "rabbit",
  age: 1,
};

//const { type, Class, name, age } = animal;
//console.log(type, Class, name, age);

const printinfo = ({
  type,
  Class,
  name,
  age
}) => `Type of the animal ${name} is ${type}, of class ${Class}. It is ${age} years old`

console.log(printinfo(animal))

// Spread operator
const person = {
  name: "Hou",
  title: "software engineer"
};
const personalInfo = {
  age: 32,
  location: "Brooklyn, NY"
};

const employee = {
  id: 1,
  department: "engineering",
  ...person,
  ...personalInfo,
};

console.log(employee);

