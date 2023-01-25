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