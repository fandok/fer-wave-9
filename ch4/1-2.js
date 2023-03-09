// Function Normal
function getDiskon(harga) {
  let musimPandemik = (harga * 30) / 100;
  return musimPandemik;
}

let sale = getDiskon(20000);
console.log(sale);

// Another Function

function sayHiTo(name) {
  return `Hai ${name.toUpperCase()}!`;
}

console.log(sayHiTo("everything"));

function sayHiAgain(name) {
  console.log(`Hai again ${name}!!`);
}

// ES6, bisa nerima 2 parameter, kalo lebih dari 2 parameter, nerima-nya objek
const sayHiAnotherOne = ({ name, age, isMarried }) => {
  console.log(
    `Once Again, Hi ${name}!! I am ${age} years old, I am ${
      isMarried ? "" : "not"
    } married`
  );
};

// ES6 One Liner
const sayHiOneLine = (name) => ({ name: name });

sayHiAgain("fandika");
sayHiAnotherOne({ name: "ramadhan", age: 17, isMarried: false });
console.log(sayHiOneLine("fandi"));

const strArray = ["Javascript", "Java", "C"];

// Contoh Higher Order Function
function forEach(array, callback) {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(callback(array[i]));
  }

  return newArray;
}

const lenArray = forEach(strArray, (item) => item.length);
const isLongArray = forEach(strArray, (item) => item.length > 4);

console.log(lenArray);
console.log(isLongArray);

String;

// Class
class Person {
  constructor(name, address) {
    this.name = name;
    this.address = address;
  }

  greeting() {
    console.log(`Hi my name is ${this.name}`);
  }
}

// Contoh new Class
const personA = new Person("fandika", "jakarta");

personA.greeting();

// Class Human

class Human {
  // Add static property
  static isLivingOnEarth = true;

  // Add constructor method
  constructor(name, address) {
    this.name = name;
    this.address = address;
  }

  introduce() {
    console.log(`Hi my name is ${this.name}`);
  }
}

console.log(Human.isLivingOnEarth);
const newHuman = new Human("budi", "tangerang");
newHuman.introduce();

// Add property / instance method
Human.prototype.greet = function (name) {
  console.log(`Hi, ${name}, I'm ${this.name}`);
};

newHuman.greet("anna");

// Add static method
Human.destroy = function (thing) {
  console.log(`Human is destroying ${thing}`);
};

Human.destroy("rubicon");

console.log(newHuman instanceof Human);
