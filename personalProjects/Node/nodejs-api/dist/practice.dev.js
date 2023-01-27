"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var name = process.argv[2];
console.log(process.argv);
var location = process.argv[3];
console.log("Hi, I'm ".concat(name, "! I live in ").concat(location));
console.log("process.env:", process.env);
console.log("process.env.NODE_ENV: ", process.env.NODE_ENV);
console.log("process.env.PORT: ", process.env.PORT); // destructuring objects

var animal = {
  type: "vertebrate",
  Class: "mammal",
  name: "rabbit",
  age: 1
}; //const { type, Class, name, age } = animal;
//console.log(type, Class, name, age);

var printinfo = function printinfo(_ref) {
  var type = _ref.type,
      Class = _ref.Class,
      name = _ref.name,
      age = _ref.age;
  return "Type of the animal ".concat(name, " is ").concat(type, ", of class ").concat(Class, ". It is ").concat(age, " years old");
};

console.log(printinfo(animal)); // Spread operator

var person = {
  name: "Hou",
  title: "software engineer"
};
var personalInfo = {
  age: 32,
  location: "Brooklyn, NY"
};

var employee = _objectSpread({
  id: 1,
  department: "engineering"
}, person, {}, personalInfo);

console.log(employee);