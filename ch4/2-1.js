// synchronous

function makeGreeting(name) {
  return `Hello, my name is ${name}!`;
}

const nama_dari_user_input = "Miriam";
const greeting = makeGreeting(nama_dari_user_input);
console.log(greeting);
// "Hello, my name is Miriam!"

// synchronous
console.log("Hello Binarian!");
setTimeout(() => {
  console.log("Javascript");
}, 100);

setTimeout(() => {
  console.log("Javascript 2");
}, 100);

console.log("Developer");

// fetch sync
fetch("https://pokeapi.co/api/v2/pokemon/ditto").then((response) => {
  console.log(response);
});

// fetch async
const fetchAsync = async () => {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
  console.log(response);
};

fetchAsync();

// versi tanpa callback
function kuadratAsync(x) {
  setTimeout(() => x * x, 100);
}

console.log(kuadratAsync(5));

// versi pake callback
function kuadratAsync2(x, callback) {
  setTimeout(() => callback(x * x), 100);
}

kuadratAsync2(5, console.log);

// interval
let a = 0;
const iniInterval = setInterval(() => {
  console.log(`${++a} kali jalan`);
  if (a === 10) clearInterval(iniInterval);
}, 100);

console.log("Apakah aku jalan duluan");

// another callback example
const download = (url, callback) => {
  console.log(`Downloading from ${url}...`);
  callback();
};

const url1 = "https://www.google.com";
const url2 = "https://www.facebook.com";
const url3 = "https://www.twitter.com";

download(url1, function () {
  download(url2, function () {
    download(url3, function () {
      console.log("download complete");
    });
  });
});
